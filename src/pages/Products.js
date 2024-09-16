
import { Formik } from "formik";
import Grid from "../components/Products/Grid"
import { useEffect, useState } from "react"
import { Col, Form, Row } from "react-bootstrap";

const Products = ()=>{
    const [products,setProducts] = useState([]);
    const [search,setSearch] = useState("");
    const [order,setOrder] = useState("");
    const handleChange = ()=>{
        // uopdate search - order
    }
    useEffect(()=>{ // auto after change state
        // call api search

        // update data for products
    },[search,order])
    return (
        <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px;"}}>
                        <h1 class="display-5 mb-3">Our Products</h1>
                        
                    </div>
                </div>
                <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <Row>
                        <Col xs={6}>
                        <input onChange={handleChange} value={search} type="text" name="search" className="form-control" placeholder="Search.."/>
                        </Col>
                        <Col xs={6}>
                        <Form.Select  onChange={handleChange} value={order} aria-label="Default select example">
                            <option value="asc">Low to high</option>
                            <option value="desc">High to low</option>
                        </Form.Select>
                        </Col>
                    </Row>
                </div>
            </div>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <Grid products={products}/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Products;