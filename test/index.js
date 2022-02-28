import controller from './../esm/index.js';
const canvas=document.getElementsByTagName('canvas')[0];
controller(
  canvas,
  {
    x:0,
    y:0,
    color:'yellow',
    inc:1,
    width:100
  },
  model=>({
    /**
     *
     * @param context CanvasRenderingContext2D
     */
    view:(context)=>{
      context.fillStyle=model.color;
      context.rect (model.x,model.y, model.width,100);
      context.fill();
    },
    tick: (elapsed, total) => {
      if (model.x<0) model.inc=1;
      if (model.x+model.width>model._dimension[0]) model.inc=-1;
      model.x=model.x+model.inc;
    },
    onkeydown :e=>{
      model.color=model.color==='yellow'?'black':'yellow';
    }
  })
);
