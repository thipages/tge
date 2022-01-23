export default
  m=>({
    view:(ctx)=> {
      ctx.fillStyle="orange";
      ctx.rect(m.x,m.y,m.w,m.h);
      ctx.fill();
    },
    tick:(diff,total)=>{
      m.w+=2*m.d;
      if (m.w>=300 || m.w<=0) m.d*=-1;
      if (m.h>30) m.h--;
    },
    keydown:e=>{
      m.h+=5;
    },
  });
