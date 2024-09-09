import { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";

const Survey = () =>{
    const questions = [
        {
            question:"Your question goes here. Lorem ipsum dolor sit amet, consectetur adipicing elit.",
            key:"q1"
        },
        {
            question:"Your question goes here. Lorem ipsum dolor sit amet, consectetur adipicing elit.",
            key:"q2"
        },
        {
            question:"Your question goes here. Lorem ipsum dolor sit amet, consectetur adipicing elit.",
            key:"q3"
        },
        {
            question:"Your question goes here. Lorem ipsum dolor sit amet, consectetur adipicing elit.",
            key:"q4"
        },
        {
            question:"Your question goes here. Lorem ipsum dolor sit amet, consectetur adipicing elit.",
            key:"q5"
        }
    ]
    const [answer,setAnswer] = useState({});
    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setAnswer({...answer,[name]:value});
        console.log(answer);
    }
    return (
        <Container>
            <h1>Survey</h1>
            <p>Thank you for shopping with us! Please take a few minutes to rate us so we can serve you better.</p>
            <hr/>
            <Form>
                <Table>
                    <thead>
                        <th></th>
                        <th>Verry Bad</th>
                        <th>Bad</th>
                        <th>Neutral</th>
                        <th>Good</th>
                        <th>Excellent</th>
                    </thead>
                    <tbody>
                        {
                            questions.map((item,key)=>{
                                return (
                                    <tr key={key}>
                                        <td>{item.question}</td>
                                        <td><input type="radio" onChange={handleInput} name={item.key} value={1}/></td>
                                        <td><input type="radio" onChange={handleInput} name={item.key} value={2}/></td>
                                        <td><input type="radio" onChange={handleInput} name={item.key} value={3}/></td>
                                        <td><input type="radio" onChange={handleInput} name={item.key} value={4}/></td>
                                        <td><input type="radio" onChange={handleInput} name={item.key} value={5}/></td>
                                    </tr>
                                )
                            })
                        }    
                        
                    </tbody>
                </Table>
                <hr/>
                <Form.Label>How else can we improve?</Form.Label>
                <Form.Control onChange={handleInput} name="how_else"/>
            </Form>
        </Container>
    );
}
export default Survey;