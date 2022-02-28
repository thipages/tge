// todo : implement FPS? https://gist.github.com/elundmark/38d3596a883521cb24f5
// todo : implement frameStats? https://stackoverflow.com/questions/63683024/optimise-javascript-canvas-for-mass-drawing-of-tiny-objects
const timer= (callback)=>{
  let total=0, _started=true;
  const start=(diff)=>{
    total+=diff;
    callback(diff, total);
    if (_started) requestAnimationFrame(start);
  };
  requestAnimationFrame(start)
};
const T='tick';
const V='view';
const registerEvents= (allEvents,register)=> Object.entries(allEvents).forEach(
  ([k,v])=>{
      const handler= e=>v(e);
      if (register) document.addEventListener(k,handler);
      else document.removeEventListener(k,handler);
  }
);
export default (canvas, model, engine,autoClearing=true)=>{
  timer((diff,total)=> {
    if (autoClearing) {
      ctx.clearRect(0,0,...model._dimension);
      ctx.beginPath();
    }
    mr[T](diff,total);
    mr[V](ctx);
  });
  // Add _dimension property (canvas dimension) to model
  model._dimension=[canvas.width,canvas.height];
  const ctx=canvas.getContext("2d");
  const mr=engine(model);
  const events=Object.keys(mr)
    .filter(v=>v.substring(0,2)==='on')
    .reduce((acc,v)=>{
      acc[v.substring(2)]=mr[v];
      return acc;
    },{});
  registerEvents(events,true);
};
