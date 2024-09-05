import { Button } from 'react-bootstrap';
import fan_img from '../assets/images/fan.png';
import { useState } from 'react';
const Fan = ()=>{
    const [deg,setDeg] = useState(0);
    const [speed,setSpeed] = useState(0);
    setInterval(()=>{
        setDeg(deg+speed>=360?0:deg+speed);
   },10)
    const startFan= ()=>{
       setSpeed(10);
    }
    
    return (
        <>
            <h1>Fan</h1>
            <div>
                <img style={{transform:`rotate(${deg}deg)`}} src={fan_img}  width={400}/>
            </div>
            {/* <Button onClick={offFan} variant='primary' type='button'>OFF</Button> */}
            <Button onClick={startFan} variant='primary' type='button'>Start</Button>
        </>
    )
}
export default Fan;