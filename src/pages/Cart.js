import { useContext } from "react";
import { Badge, Col, InputGroup, Row, Table } from "react-bootstrap";
import Context from "../hooks/context/context";
import { Form, Link } from "react-router-dom";
import { ACTION } from "../hooks/context/reducer";

const Cart = ()=>{
    const {state,dispatch} = useContext(Context);
    const cart = state.cart;
    var total = 0;
    const removeItem = (id)=>{
        var new_cart = [];
        cart.map(item=>{
            if(item.id != id)
                new_cart.push(item);
        })
        dispatch({type: ACTION.UPDATE_CART,payload: new_cart});
        dispatch({type: ACTION.SHOW_LOADING});
        setTimeout(()=>{
            dispatch({type: ACTION.HIDE_LOADING})
        },1000);
    }
    return (
        <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px;"}}>
                        <h1 class="display-5 mb-3">Shopping cart</h1>
                        
                    </div>
                </div>
                <div class="col-lg-12 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <Table striped bordered hover>
                        <thead>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            {
                                cart.map((item,key)=>{
                                    total += item.price * item.buy_qty;
                                    return <tr key={key}>
                                        <td>
                                            <Row>
                                                <Col><img src={item.thumbnail} width={80} /></Col>
                                                <Col>{item.title}</Col>
                                            </Row>
                                            
                                        </td>
                                        <td>{item.price}</td>
                                        <td>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>-</InputGroup.Text>
                                            <input style={{width: 10}} type="number" className="form-control" value={item.buy_qty} />
                                            <InputGroup.Text>+</InputGroup.Text>
                                        </InputGroup>
                                        </td>
                                        <td>{item.buy_qty* item.price} <Badge onClick={()=>removeItem(item.id)} bg="dark">x</Badge></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <Col lg={8}></Col>
                <Col>
                    <h4>Subtotal: ${total}</h4>       
                    <hr/> 
                    <h4>Tax: ${(total * 0.1).toFixed(2)}</h4>     
                    <hr/>    
                    <h4>Grand total: <span>${(total * 1.1).toFixed(2)}</span></h4>        
                    <div className="mt-3">
                        <Link to="/checkout" className="btn btn-primary">Checkout</Link>
                    </div>
                </Col>
            </div>
        </div>
        </div>
    )
}

export default Cart;