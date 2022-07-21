import React, {useState} from 'react';
import './App.css';
import Count from "./Count";
import Count2 from "./Count2";
import Component1 from "./Component1";
import Component2 from "./Component2";


function App() {
    return (
        <div className={"app"}>
            <Count/>
            <Count2/>
            <Component1/>
            <Component2/>
        </div>
    );
}


export default App;
