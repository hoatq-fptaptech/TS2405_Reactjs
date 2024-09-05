import { Button } from 'react-bootstrap';
import fan_img from '../assets/images/fan.png';
import { useState } from 'react';
const Fan = ()=>{
    const [deg,setDeg] = useState(0);
    const [speed,setSpeed] = useState(0);
    setInterval(()=>{
        setDeg(deg+speed>=360?0:deg+speed)
    },10);
    const offFan = ()=>{
        setSpeed(0);
    }
    const startFan1= ()=>{
       setSpeed(10);
    }
    const startFan2= ()=>{
        setSpeed(30);
     }
     const startFan3= ()=>{
        setSpeed(30);
     }
    return (
        <>
            <h1>Fan</h1>
            <div>
                <img style={{transform:`rotate(${deg}deg)`}} src={fan_img}  width={400}/>
            </div>
            <Button onClick={offFan} variant='primary' type='button'>OFF</Button>
            <Button onClick={startFan1} variant='primary' type='button'>No 1</Button>
            <Button onClick={startFan2} variant='primary' type='button'>No 2</Button>
            <Button onClick={startFan3} variant='primary' type='button'>No 3</Button>
        
        </>
    )
}
export default Fan;