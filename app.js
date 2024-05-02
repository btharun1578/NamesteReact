/* Lets create this nested structure using React 
<div>
    <div>
        <h1>
        <h2>
    </div>

<div>
 */



const parent=React.createElement("div",{id:"parent"},React.createElement("div",{},[React.createElement("h1",{id:"heading"},"This is the heading1 of Nested Element"),React.createElement("h1",{},"This is the heading2 of the nested element of React ")]));

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)