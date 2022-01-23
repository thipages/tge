const oMap=ctx=>obj=>Object.keys(obj).reduce(
  (acc,k)=>{
    acc[k]=function(){return obj[k](ctx);};
    return acc;
  },{}
);
export default ctx=> {
  return  oMap(ctx)({
    context,
    setStyle,
    paint,
    arc,
    circle,
    star,
    rect
  });
};
const fStyle=['black', 'white', 1];
const F='fill';
const S='stroke';
const L='lineWidth';
const style=p=>p+'Style';
const setStyle=ctx=>(...styles)=>{
  [...[F,S].map(style),L].forEach(
    (n,i)=>
      ctx[n]=styles[n]?styles[n]:fStyle[i]
  );
};
const context=ctx=>(f)=> {
  f(ctx);
};
const paint=ctx=>fillstrokeNum=>{
  const a=!fillstrokeNum
    ? [F,S]
    : fillstrokeNum===1.0
    ? [F] : [S];
  [...a].forEach(
      n=>{
        if (n && arguments[n]) ctx[n]();
      }
  );
};
const rect=ctx=>(x,y,w,h)=> ctx.rect(x,y,w,h)
const arc=ctx=>(x,y,r,angle1,angle2,clockwise=true)=>
  ctx.arc(x, y, r, angle1, angle2,clockwise)
const circle=ctx=>(x,y,r) =>
  arc(ctx)(x,y,r,0,Math.PI*2);
// https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5
const star=ctx=>(cx,cy,spikes,outerRadius,innerRadius)=>{
  const line=(radius)=>{
    x=cx+Math.cos(rot)*radius;
    y=cy+Math.sin(rot)*radius;
    ctx.lineTo(x,y);
    rot+=step;
  };
  let rot=Math.PI/2*3,x=cx,y=cy,step=Math.PI/spikes;
  ctx.beginPath();
  ctx.moveTo(cx,cy-outerRadius);
  for(let i=0;i<spikes;i++) [outerRadius,innerRadius].forEach(line);
  ctx.lineTo(cx,cy-outerRadius);
  ctx.closePath();
};
