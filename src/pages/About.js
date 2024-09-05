import { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
const About = ()=>{
    const [number,setNumber] =  useState(10); // khai báo 1 state là number có giá trị ban đầu = 10
    const clickMe = ()=>{
        setNumber(number+10>100?100:number+10);//<=> number =  number +1   
    }
    const minusNum = ()=>{
        setNumber(number-10>0?number-10:0);
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
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
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