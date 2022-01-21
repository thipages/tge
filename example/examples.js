import {grid} from "./grid.js";

export default [
  [{
    w:10,x:100, y:100,h:30,dir:1
  },
  m=>({
    tick:(diff,total)=>{
      m.w+=2*m.dir;
      if (m.w>=300 || m.w<=0) m.dir*=-1;
      if (m.h>30) m.h--;
    },
    keydown:e=>{
      m.h+=5;
    },
  }),
  (ctx,m)=>{

    ctx.translate(1, 1);
    ctx.translate(-1, -1);

    ctx.strokeStyle='black';
    ctx.lineWidth=1;

    //

    ctx.strokeStyle="blue";
    ctx.fillStyle="orange";
    ctx.lineWidth=10;
    ctx.rect(m.x,m.y,m.w,m.h);
    ctx.fill();
    ctx.stroke();

  }],
  [
    {
      w:10,x:100, y:100,h:30,dir:1
    },
      m=>({
    tick:(diff,total)=>{}
  }),
  (ctx,m)=>{
    ctx.strokeStyle="black";
    ctx.fillStyle="black";
    ctx.lineWidth=1;
    grid(ctx)(200,200,20, 200,100);
  }]
];
