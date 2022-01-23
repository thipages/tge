// todo for x<0 case, actor can go inside the wall...
const bouncing=(m,offBounds,force=true)=>{
  const off=offBounds(m);
  if (off[0]>0) {m.x=-off[0];m.d[0]*=-1;}
  if (off[1]>0) {m.x=m._bounds[2]-m.w-off[1];m.d[0]*=-1;}
  if (off[2]>0) {m.y=off[2];m.d[1]*=-1;}
  if (off[3]>0) {m.y=m._bounds[3]-m.h-off[3];m.d[1]*=-1;}
  if (force) [m.x,m.y]=[m.x,m.y];
  return [m.x,m.y];
};
const stopping=(m,offBounds,force=true)=>{
  const off=offBounds(m);
  if (off[0]>0) {m.x=-0;}
  if (off[1]>0) {m.x=m._bounds[2]-m.w}
  if (off[2]>0) {m.y=-0}
  if (off[3]>0) {m.y=m._bounds[3]-m.h}
  if (force) [m.x,m.y]=[m.x,m.y];
  return [m.x,m.y];
};
export default {bouncing, stopping};
