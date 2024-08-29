import Product from "./Product";

const Grid = ({products})=>{
    return (
        <div className="row g-4">
            {
                products.map((item,key)=>{
                    return <Product key={key} product={item}/>
                })
            }
        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
        </div>
    </div>
    )
}
export default Grid;