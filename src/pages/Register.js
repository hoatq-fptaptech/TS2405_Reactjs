import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, Container, FormGroup, FormLabel, Row } from "react-bootstrap";

const Regsiter = ()=>{
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1>Register</h1>
                    <Formik>
                        <Form>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Fullname</FormLabel>
                                <Field type="text" name="fullname" className="form-control"/>
                                <ErrorMessage name="fullname" component='p' style={{color: 'red'}} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Email</FormLabel>
                                <Field type="email" name="email" className="form-control"/>
                                <ErrorMessage name="email" component='p' style={{color: 'red'}} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <FormLabel>Password</FormLabel>
                                <Field type="password" name="password" className="form-control"/>
                                <ErrorMessage name="password" component='p' style={{color: 'red'}} />
                            </FormGroup>
                            <FormGroup className="mb-3 text-start">
                                <Button variant="primary" type="submit">Register</Button>
                            </FormGroup>
                        </Form>
                    </Formik>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default Regsiter;