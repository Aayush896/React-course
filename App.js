import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => Object => HTMLElement(rendered on the DOM)
// const heading = React.createElement("h1",{id:"heading"},"React Learning"); // we will not use this from now on, we will use JSX


//JSX - HTML like  or XML like syntax
// JSX (transpiled(converted into a code that browers can understand)  before it reached the JS engine)  => transpiling is done by parcel-> Babel
// JSX => React.createElement => React Element JS-Object => HTMLElement(rendered on the DOM)
const heading = (
<h1 className="head" tabIndex="5">
    JSX Heading 
</h1>);


// React Component
// Class based component  - OLD way of writing components
// function based component - New way of writing components (with hooks)

const Title = () => (
    <h1 className="head" tabIndex="5">
        Functional Component Title
    </h1>
);

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <Title /> 
        <h1 className="heading">Functional Component Heading</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // rendering functinal components to the page


