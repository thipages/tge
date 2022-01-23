export default m => {
  const def=[0,0,0,0];
  if (m.x<0) def[0]=-m.x;
  else def[1]=m.x+m.w-m._bounds[2];
  if (m.y<0) def[2]=-m.y;
  else def[3]=m.y+m.h-m._bounds[3];
  return def;
};
