import { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
const About = ()=>{
    const [number,setNumber] =  useState(10); // khai báo 1 state là number có giá trị ban đầu = 10
    const [info,setInfo] = useState({});
    const clickMe = ()=>{
        setNumber(number+10>100?100:number+10);//<=> number =  number +1   
    }
    const minusNum = ()=>{
        setNumber(number-10>0?number-10:0);
    }
    const handleInput = (e)=>{
        const value = e.target.value; // lấy được giá trị của input đang được target đến
        const name = e.target.name;
        setInfo({...info,[name]:value});// sẽ trả về giá trị của info sau khi đã cập nhật giá trị
    }
    const submitForm = ()=>{

    }
    return (
    <div className="container">
        <h1>About page</h1>
        <h2>Number: {number}</h2>
        <div className="progress mb-3 mt-3" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{width: number+"%"}}></div>
        </div>
        <p><button onClick={clickMe} className="btn btn-primary">Plus number</button></p>
        <p><button onClick={minusNum} className="btn btn-danger">Minus number</button></p>
        <Row>
            <Col xs={4}>
            <Form className="text-start" onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasicFullname">
                    <Form.Label>Fullname: {info.fullname}</Form.Label>
                    <Form.Control onChange={handleInput} value={info.fullname} name="fullname" type="text" placeholder="Enter Full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address: {info.email}</Form.Label>
                    <Form.Control onChange={handleInput} name="email" value={info.email} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: {info.password}</Form.Label>
                    <Form.Control onChange={handleInput} name="password" value={info.password} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                </Col>
            </Row>
    </div>
    )
}
export default About;
// STATE
//1. giao diện sử dụng biến number để hiển thị
//2. Click button thì chạy hàm làm thay đổi giá trị của biến number
//3. cập nhật lại giao diện theo giá trị mới của biến number ==> react nó tự động làm nếu number là state