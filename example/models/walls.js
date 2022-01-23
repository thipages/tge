import arrow2point from "../core/arrow2point.js";
import offBounds from "../mixins/offBounds_in.js";
import effects from "../mixins/offBounds_out.js";
const {bouncing, stopping}=effects;
export default
  m=>({
    view:(ctx)=> {
      paintActor(m,ctx);
    },
    tick:(diff,total)=>{
      move(m);
      bouncing(m,offBounds);
      //stopping(m,offBounds);
    },
    keydown:function (e) {
      changeDirection(m,arrow2point(e.key));
    }
  });
const paintActor=(m,ctx)=>{
  ctx.fillStyle="orange";
  ctx.rect(m.x,m.y,m.w,m.h);
  ctx.fill();
};
const changeDir=(m,key, force=true) =>{
  const p = arrow2point(key);
  if (force) m.d=[].concat(p);
  return p;
};
const changeDirection=(m,nd) =>{
  m.d=[].concat(nd);
};
const move= (m,force=true)=> {
  const r=[m.x + m.d[0]*m.s,m.y + m.d[1]*m.s];
  if (force) {
    m.x=r[0];
    m.y=r[1]
  }
  return r;
};
