import controller from './../esm/index.js'
import grid from "./models/grid.js";
import minimalist from "./models/minimalist.js";
import walls from "./models/walls.js";
import actors from "./models/actors.js";
import painter from "./painter.js";

const models=[
  actors,walls,minimalist,grid
];
const canvas=document.getElementsByTagName('canvas')[0];
let index=0,control;
const change=()=>{
  if (index === models.length) index = 0;
  if (control) control.alternate();
  control = controller(canvas, act,models[index]);
  index++;
};
const actor=(x,y,w,h,d,s,a)=>({x,y,w,h,d,s,a});
const act=actor(300,300,20,20,[0,0],4,[0,0]);

const run=(index)=> {
  if (index!==undefined) {
    control = controller(canvas, act,models[index]);
    //control = controller(canvas,...actors);
  } else {
    setInterval(change,1000);
  }
}

run(1);


