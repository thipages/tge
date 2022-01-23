import rectangle from "../core/rectangle.js";
const {WH2TL,TL2WH}=rectangle;
/**
 * Returns intersecting part of two rectangles
 * @param  {object}  rect1 4 coordinates in form of {x1, y1, x2, y2} object
 * @param  {object}  rect2 4 coordinates in form of {x1, y1, x2, y2} object
 * @return {boolean}    False if there's no intersecting part
 * @return {object}     4 coordinates in form of {x1, y1, x2, y2} object
 * https://codereview.stackexchange.com/questions/185323/find-the-intersect-area-of-two-overlapping-rectangles
 */
const getIntersectingRectangle = (rect1, rect2) => {
  const [r1, r2] = [rect1, rect2].map(r => ({
      x: [r.x1, r.x2].sort((a,b) => a - b),
      y: [r.y1, r.y2].sort((a,b) => a - b)
  }));
  const noIntersect = r2.x[0] > r1.x[1] || r2.x[1] < r1.x[0] ||
    r2.y[0] > r1.y[1] || r2.y[1] < r1.y[0];
  return noIntersect ? false : {
    x1: Math.max(r1.x[0], r2.x[0]), // _[0] is the lesser,
    y1: Math.max(r1.y[0], r2.y[0]), // _[1] is the greater
    x2: Math.min(r1.x[1], r2.x[1]),
    y2: Math.min(r1.y[1], r2.y[1])
  };
};
const intersection=(r1, r2) => TL2WH(
  getIntersectingRectangle(...[r1, r2].map(WH2TL))
);
export default {intersection};
