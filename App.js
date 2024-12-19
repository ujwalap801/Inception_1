/**
 * <div id="parent">
 *    <div id="child">
 *       <h1> I'm h1 tag</h1
 *       <h1> I'm h2tag</h1
 *   </div>
 * </div
 * 
 * 
 * ReactElement Object => HTML(Browser Understands)
 *
 * const heading = React.createElement("h1",{id:"heading"},"Hello World From React");
 *
 * if we want to create nested elements then we have to pass array of objects.
 */


const parent = React.createElement(
    "div",
    {id:"parent"},
     React.createElement("div",{id:"child1"},
     [
     React.createElement("h1",{},"I am h1 tag"),
     React.createElement("h2",{},"I am h2 tag")
    ]),
     
    React.createElement("div",{id:"child2"},
        [
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
       ]),
     
     );

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello from React"
);

//heading is an object which has type, props and children as its properties.
// console.log(heading);

// React Element is normal JavaScript Object{}

console.log(parent);
const  root= ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);


root.render(parent);