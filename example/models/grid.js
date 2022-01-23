import {grid} from "../grid.js";
export default
    m=>({
      tick:(diff,total)=>{},
      view:(ctx)=>{
        ctx.strokeStyle="black";
        ctx.fillStyle="black";
        ctx.lineWidth=1;
        grid(ctx)(200,200,20, 200,100);
      }
    });
