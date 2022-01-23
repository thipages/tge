import arrow2point from "../core/arrow2point.js";

const actor=(x,y,w,h,d,s,a,p)=>({x,y,w,h,d,s,a,p});
const paintActor=v=>{
  const a=actor(...v)
  const ap=v.pop();
  a.p=ctx=>{
    const style=ap.split(',').map(v=>v.trim());
    //console.log(style);
    ctx.fillStyle=style[1];
    ctx.rect(...v);
    ctx.fill();
  };
  return a;
}
const model={
  actors:
    [
      [100+Math.random()*200,300,20,20,[0,0],2,[0,0],'R,orange'],
      [150,300,20,20,[0,0],3,[0,0],'R,blue'],
      [150,300,20,20,[0,0],1,[0,0],'R,black']
    ].map(paintActor)
};
const engine=
  m=>({
    view:(ctx)=> {
      m.actors.forEach (m=>m.p(ctx) )
    },
    tick:(diff,total)=>{
      m.actors.forEach (m=>{
        m.d=[0,1];
        move(m);
      });
    },
    keydown:e=>{

    },
  });
const changeDirection=(m,nd) =>{
  m.d=[].concat(nd); // arrow2point(key)
};
const move= (m,force=true)=> {
  const r=[m.x + m.d[0]*m.s,m.y + m.d[1]*m.s];
  if (force) {
    m.x=r[0];
    m.y=r[1]
  }
  return r;
};
export default [model,engine];
