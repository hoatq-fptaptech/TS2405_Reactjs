import { useEffect, useState } from "react";
import Grid from "../components/Products/Grid";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Category = ()=>{
    const {slug} = useParams();
    const [products,setProducts] = useState([]);
    const getProductsData = async ()=>{
        const rs = await fetch("https://dummyjson.com/products/category/"+slug);
        const data = await rs.json();
        setProducts(data.products);
    }
    useEffect(()=>{
        getProductsData();
    },[slug])
    return (
        <Container>
            <h1 className="text-capitalize">{slug}</h1>  
            <Grid products={products}/>
        </Container>
    )
}
export default Category;