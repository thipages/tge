# timed-canvas

```javascript
    const canvas=document.getElementsByTagName('canvas')[0];
    const tc=controller(canvas,
      ()=>{/*Model definition*/}, 
      model=>({
        view:(context)=>{/* Context access-Required */},
        tick: (elapsed, total) => {/* Elapsed/total time(ms) access-Required */},
        keydown :e=>{/* Event access-Optional  */}
      })
    );
```

see example folder
