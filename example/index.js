import controller from './../esm/index.js'
import grid from "./models/grid.js";
import minimalist from "./models/minimalist.js";
import walls from "./models/walls.js";
const models=[
  walls,minimalist,grid
];
const canvas=document.getElementsByTagName('canvas')[0];
let index=0,control, preferedIndex=0;//null;
const change=()=>{
  if (preferedIndex===null) {
    if (index === models.length) index = 0;
    if (control) control.alternate();
    control = controller(canvas, ...models[index]);
    index++;
  } else {
    // MODEL CHANGE TESTING
    if (control) control.alternate();
    control = controller(canvas, ...models[preferedIndex]);
  }
};
setInterval(change,1000);
change(0);


