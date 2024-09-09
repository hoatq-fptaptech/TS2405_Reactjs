import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Col, Container, FormGroup, FormLabel, Row } from "react-bootstrap";
import * as Yup from 'yup';
const Regsiter = ()=>{
    const [submitting,setSubmitting] = useState(false);
    const validationSchema = Yup.object({
        fullname: Yup.string()
            .min(6,"Độ dài tối thiểu là 6")
            .required("Vui lòng nhập thông tin"),
        email: Yup.string()
            .email("Vui lòng nhập đúng email")
            .required("Vui lòng nhập thông tin"),
        password: Yup.string()
            .min(6,"Độ dài tối thiểu là 6")
            .required("Vui lòng nhập thông tin")
    });
    const values = {
        fullname:'',
        email:'',
        password:''
    }
    const formsubmit = ()=>{
        setSubmitting(true);
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1>Register</h1>
                    <Formik initialValues={values}
                        validationSchema={validationSchema}
                        onSubmit={formsubmit}
                    >
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
                                <Button variant="primary" type="submit" disabled={submitting}>Register</Button>
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