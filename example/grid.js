export const grid =ctx=> (w, h,step, offsetX=0, offsetY=0)=>{
  for (let x = offsetX; x <= w+offsetX; x += step) {
    ctx.moveTo(x, offsetY);
    ctx.lineTo(x, h+offsetY);
    for (let y = offsetY; y <= h+offsetY; y += step) {
      ctx.moveTo(offsetX, y);
      ctx.lineTo(w+offsetX, y);
    }
  }
  ctx.stroke();
  ctx.beginPath();
};

const gridModel=(x,y,w,h, rows, cols)=>{
  // find the max cell width/height
  const [wCell,hCell]=[w/rows|0,h/cols|0];
  // todo : calculate dx/dy
  const [dx1,dy1,dx2,dy2]=[0,0,0,0];
  const [dx,dy]=[dx1+dx2,dy1+dy2];
  const bounds=[x+dx1,y+dy1,w-dx,h-dy];
  return {
    render: (ctx) => {
      grid(ctx)(w, h, wCell, x, y);
    },
    offsets: () => [dx1, dx2, dy1, dy2],
    bounds: () => bounds,
    cellDimension: () => [wCell, hCell],
    getCoordinates: (px, py) => {
    },

}
};
const intersectRect=(r1, r2)=> {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
};
const rect=(x,y,w,h)=> {
  const [right, left, top, bottom]=[x,x+w,y,y+h];
  return {
    intersects:(rect)=>intersectRect(this,rect),
    get right(){return right;},
    get left(){return left;},
    get top(){return top;},
    get bottom(){return bottom;}
  }
}
