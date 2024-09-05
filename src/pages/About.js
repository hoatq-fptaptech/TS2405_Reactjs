import { useState } from "react";

const About = ()=>{
    const [number,setNumber] =  useState(10); // khai báo 1 state là number có giá trị ban đầu = 10
    const clickMe = ()=>{
        setNumber(number+1);//<=> number =  number +1
    }
    return (
    <div className="container">
        <h1>About page</h1>
        <h2>Number: {number}</h2>
        <p><button onClick={clickMe} className="btn btn-primary">Plus number</button></p>
        <p><button className="btn btn-danger">Minus number</button></p>
    </div>
    )
}
export default About;
// STATE