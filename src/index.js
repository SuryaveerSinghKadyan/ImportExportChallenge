import React from "react";
import ReactDOM from "react-dom";
//so the first ADD here is the deafult export and could have been named anything else also, so whatever is exported from calculator.js as default would be stored in ADD.

//To export multiple things from the same file the exact variable or function names as used in the file from which they are exported must be used and put within {} curly brackets separeted by ,
import ADD from "./calculator";
import { multiply, subtract, divide } from "./calculator";
//this also can be used:
// import ADD, { multiply, subtract, divide } from "./calculator";


ReactDOM.render(
  <ul>
    <li>{ADD(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{subtract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
