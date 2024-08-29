const Product = ({product})=>{
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                    <img className="img-fluid w-100" src={product.thumbnail} alt=""/>
                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                </div>
                <div className="text-center p-4">
                    <a className="d-block h5 mb-2" href="">{product.name}</a>
                    <span className="text-primary me-1">${product.price}</span>
                    <span className="text-body text-decoration-line-through">${product.old_price}</span>
                </div>
                <div className="d-flex border-top">
                    <small className="w-50 text-center border-end py-2">
                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</a>
                    </small>
                    <small className="w-50 text-center py-2">
                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                    </small>
                </div>
            </div>
        </div>
    )
}
export default Product;