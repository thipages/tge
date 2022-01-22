import {grid} from "../grid.js";

const model={
  w:10,x:100, y:100,h:30,dir:1
};
export default [
    model,
    m=>({
      tick:(diff,total)=>{},
      view:(ctx)=>{
        ctx.strokeStyle="black";
        ctx.fillStyle="black";
        ctx.lineWidth=1;
        grid(ctx)(200,200,20, 200,100);
      }
    })
];
