import CART from "./initState"

export const CART_ACTION = {
    UPDATE_CART: "update_cart",
    REMOVE_ALL: "remove_all"
}

const cart_reducers = (state = CART, action ) =>{
    switch(action.type){
        case CART_ACTION.UPDATE_CART: return {...state,items:action.payload.items, total:action.payload.total};
        case CART_ACTION.REMOVE_ALL: return {...state,items:[], total:0};
        default: return state;
    }
}

export default cart_reducers;