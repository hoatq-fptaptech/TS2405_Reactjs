import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";

const ProductDetail = ()=>{
    const [product,setProduct] = useState({});
    // id
    const {id} = useParams();
    // call api
    const getDetail = async ()=>{
        // const rs = await fetch("https://dummyjson.com/products/"+id);
        // const data = await rs.json();
        // setProduct(data);
        try {
            const rs = await axios.get(`https://dummyjson.com/products/${id}`);
            const data = rs.data;
            setProduct(data);
        } catch (error) {
            alert(error);
        }
    }
    // useEffect get data
    useEffect(()=>{
        getDetail();
    },[]);
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={product.thumbnail}/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="display-5 mb-4">{product.title}</h1>
                        <p className="mb-4 text-danger">${product.price}</p>
                        <p className="mb-4">{product.description}</p>
                       
                        <p><i className="fa fa-check text-primary me-3"></i>{product.availabilityStatus}</p>
                        <p><i className="fa fa-check text-primary me-3"></i>{product.shippingInformation}</p>
                        <p><i className="fa fa-check text-primary me-3"></i>{product.shippingInformation}</p>
                         
                    
                        <input value={1} type="number" name="buy_qty"/>
                        <button type="button" className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;