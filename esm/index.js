// todo : implement FPS? https://gist.github.com/elundmark/38d3596a883521cb24f5
// todo : implement frameStats? https://stackoverflow.com/questions/63683024/optimise-javascript-canvas-for-mass-drawing-of-tiny-objects
const timer= (callback)=>{
  let total=0;
  const start=(diff)=>{
    total+=diff;
    callback(diff, total);
    requestAnimationFrame(start);
  };
  requestAnimationFrame(start);
};
// todo : manage removeEventListener
const T='tick';
const registerEvents= (allEvents)=> Object.entries(allEvents).forEach(
  ([k,v])=>{
    if (k!==T) document.addEventListener(k,e=>v(e));
  }
);
export default (canvas, model, events,view)=>{
  // Update model with _bounds property (canvas size)
  model._bounds=[0,0,canvas.width,canvas.height];
  const ctx=canvas.getContext("2d");
  const mEvents=events(model);
  if (!mEvents[T]) mEvents[T]=()=>{};
  registerEvents(mEvents);
  timer((diff,total)=> {
    ctx.clearRect(...model._bounds);
    ctx.beginPath();
    mEvents[T](diff,total);
    view(ctx,model);
  });
};
