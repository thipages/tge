import arrow2point from "../arrow2point.js";

export default[
  {
    w:20,x:300, y:100,h:20,dir:[0,0],speed:2, acceleration:[0,0]
  },
  m=>({
    view:(ctx)=> {
      ctx.fillStyle="orange";
      ctx.rect(m.x,m.y,m.w,m.h);
      ctx.fill();
    },
    tick:(diff,total)=>{
      move(m);
      constraints(m)
    },
    keydown:function (e) {
      if (m.x===m.dir[0] && m.y===m.dir[1]) return;
      changeDir(m,e.key);
    }
  })
];
const U=undefined;
const constraints=(m)=> {
  if (m.x<0) {m.x=-m.x;m.dir[0]*=-1}
  else if (m.y<0) {m.y=-m.y;m.dir[1]*=-1}
  else {
    const yOff=m._bounds[3]-m.y;
    if (yOff<m.h) {
      m.y=m._bounds[3]-m.h;
      m.dir[1]*=-1
    }
    const xOff=m._bounds[2]-m.x;
    if (xOff<m.w) {
      m.x=m._bounds[2]-m.w;
      m.dir[0]*=-1
    }
  }

};
const changeDir=(m,key) =>{
  const p = arrow2point(key);
  m.dir[0]=p[0];
  m.dir[1]=p[1];
};
const move= (m)=> {
  m.x += m.dir[0]*m.speed;
  m.y += m.dir[1]*m.speed;
};
