const TL2WH= r=>({
  x:r.x1,
  y:r.y1,
  w:r.x2-r.x1,
  h:r.y2-r.y1
});
const WH2TL= r=>({
  x1:r.x,
  y1:r.y,
  x2:r.x-r.w,
  y2:r.y-r.h
});
const rect_WH=(x,y,w,h)=>({x, y, w, h});
const rect_TL=(x1,y1,x2,y2)=>({x1,y1,x2,y2});

export default {WH2TL,TL2WH,rect_WH, rect_TL};
