
import { Formik } from "formik";
import Grid from "../components/Products/Grid"
import { useEffect, useState } from "react"
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";

const Products = ()=>{
    const [products,setProducts] = useState([]);
    // const [search,setSearch] = useState("");
    // const [order,setOrder] = useState("");
    const [filter,setFilter] = useState({
        search:"",
        order:"asc"
    })
    const handleChange = (e)=>{
        // uopdate search - order
       setFilter({...filter,[e.target.name]:[e.target.value]});
    //    var f = filter;
    //    const name = e.target.name;
    //    const value = e.target.value;
    //    f[name] = value;
    //    setFilter(f);
    }
    const getData = async ()=>{
        // call api search
        const url = `https://dummyjson.com/products/search?q=${filter.search}&sortBy=title&order=${filter.order}`;
        try {
            const rs = axios.get(url);
            setProducts((await rs).data.products);
        } catch (error) {
            
        }
        // update data for products
    }
    useEffect(()=>{ // auto after change state
        getData();
    },[filter])
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
                        <input onChange={handleChange} value={filter.search} type="text" name="search" className="form-control" placeholder="Search.."/>
                        </Col>
                        <Col xs={6}>
                        <Form.Select name="order" onChange={handleChange} value={filter.order} aria-label="Default select example">
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