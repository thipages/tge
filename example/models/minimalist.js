export default [
  {
    w:10,x:100, y:100,h:30,dir:1
  },
  m=>({
    view:(ctx)=> {
      ctx.fillStyle="orange";
      ctx.rect(m.x,m.y,m.w,m.h);
      ctx.fill();
    },
    tick:(diff,total)=>{
      m.w+=2*m.dir;
      if (m.w>=300 || m.w<=0) m.dir*=-1;
      if (m.h>30) m.h--;
    },
    keydown:e=>{
      m.h+=5;
    },
  })
]
