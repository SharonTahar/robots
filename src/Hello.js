import React from 'react';
import App from './App'
import './hello.css' //to add a dedicated css file for a component

//no dashes in css react fontSize instead of font-size
const Hello = ({myfunction, myholder, name, onemoreprops}) => {
    // const {id, name, username, email} = data; //no need to distruct if its done in the declaration paranthesis
    console.log(onemoreprops);
    return(
        <div >
            <h2 >#  </h2> 
            <h3 > Hello {name} </h3>
            <h4>Sharon</h4>
            <input type="text" onchange={myfunction} />
            <button type="button" onclick={myholder}>click me</button>
        </div>
    )
}
export default Hello;