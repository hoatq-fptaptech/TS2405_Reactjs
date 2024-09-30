import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CART_ACTION } from "../../redux/cart/reducer";
import { connect } from "react-redux";
// import Context from "../../hooks/context/context";
// import { ACTION } from "../../hooks/context/reducer";

const Product = (props)=>{
    const product = props.product;
    // const {state,dispatch} = useContext(Context);
    const addToCart = ()=>{
        // var cart = state.cart; // array
        var cart = props.items; // array
        // kiêm tra sp đã có trong cart hay chưa?
        var check = false;
        cart.map(e=>{
            if(e.id == product.id){
                check = true;
                e.buy_qty = e.buy_qty + 1;
            }
            return e;
        })
        if(check == false){
            product.buy_qty = 1; // tự tạo ra 1 thuộc tính là buy_qty
            cart.push(product);
        }
        // use redux
        props.addCart(cart);

        // lấy product đưa vào trong cart của global state
        //setState({...state,cart:cart});
        // dispatch({type: ACTION.UPDATE_CART, payload: cart})
        // dispatch({type: ACTION.SHOW_LOADING});
        // setTimeout(()=>{
        //     dispatch({type: ACTION.HIDE_LOADING})
        // },1000);
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                    <img className="img-fluid w-100" src={product.thumbnail} alt=""/>
                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                </div>
                <div className="text-center p-4">
                    <Link className="d-block h5 mb-2" to={"/product/"+product.id}>{product.title}</Link>
                    <span className="text-primary me-1">${product.price}</span>
                    <span className="text-body text-decoration-line-through">${product.old_price}</span>
                </div>
                <div className="d-flex border-top">
                    <small className="w-50 text-center border-end py-2">
                        <Link  to={"/product/"+product.id} className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                    </small>
                    <small className="w-50 text-center py-2">
                        <button onClick={addToCart} className="text-body btn btn-default" type="button"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</button>
                    </small>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.cart_reducers.items? state.cart_reducers.items:[]
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addCart: (cart) => {
            let total = 0;
            cart.forEach(e=>{
                total += e.price * e.buy_qty;
            });
            dispatch({type: CART_ACTION.UPDATE_CART, payload:{items:cart, total: total}});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);