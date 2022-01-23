export default (key, fallback=[0,0])=>
  mapArrows2Points.hasOwnProperty(key) ? mapArrows2Points[key] : fallback;

const mapArrows2Points = {
  "ArrowUp": [0, -1],
  "ArrowRight": [1, 0],
  "ArrowDown": [0, 1],
  "ArrowLeft": [-1, 0]
};
