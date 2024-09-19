export const ACTION = {
    UPDATE_CART: "update_cart",
    SHOW_LOADING: "show_loading",
    HIDE_LOADING: "hide_loading",
}
const updateLocalStorage = (state)=>{
    localStorage.setItem("state",JSON.stringify(state));
    return state;
}
const reducer = (state,action) =>{
    switch(action.type){
        case ACTION.UPDATE_CART: return updateLocalStorage({...state,cart:action.payload});
        case ACTION.SHOW_LOADING: return updateLocalStorage({...state, isLoading: true});
        case ACTION.HIDE_LOADING: return updateLocalStorage({...state, isLoading: false});
        default: return state;
    }
}
export default reducer;