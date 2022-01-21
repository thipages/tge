import controller from './../esm/index.js'
import examples from './examples.js';

let index=0,control;
const change=()=>{
  if (index===examples.length) index=0;
  if (control) control.alternate();
  control=controller(document.getElementsByTagName('canvas')[0],...examples[index]);
  index++;
};
setInterval(change,1000);
change();
