import React from "react";
import ReactDOM from "react-dom/client";
// nested structure:
/**
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> "h1 tag it is"</h1>  
 *          <h2> "h2 tag it is"</h2>  siblings..
 *      </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", {}, "h1 tag it is, learning react"),  // array of children
            React.createElement("h2",{},"h2 tag it is!")
        ]
    )
);

// const heading = React.createElement("h1",
//     { id: "heading" },
//     "Hello world from react!"
// );
// console.log(heading) // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);