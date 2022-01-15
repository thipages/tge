import controller from './../esm/index.js'
controller(
  document.getElementsByTagName('canvas')[0],
  {
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
    ctx.strokeStyle="green";
    ctx.fillStyle="orange";
    ctx.lineWidth=5;
    ctx.rect(m.x,m.y,m.w,m.h);
    ctx.fill();
    ctx.stroke();
  }
);
