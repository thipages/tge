# timed-canvas

```javascript
    import controller from './../esm/index.js';
    const canvas=document.getElementsByTagName('canvas')[0];
    const model={};
    controller(
      canvas,
      model,
      model=>({
        view:(context)=>{
          
        },
        tick: (elapsed_ms, total_ms) => {
          
        },
        onkeydown :e=>{
          
        }
      })
    );
```
`model._dimension stores the canvas dimension as an array [width,height]` 

see test folder
