import LOADING from "./initState"

export const LOADING_ACTION = {
    SHOW: true,
    HIDE: false
}

const loading_reducers = (state = LOADING, action)=>{
    switch(action.type){
        case LOADING_ACTION.SHOW: return {...state,isShow:true};
        case LOADING_ACTION.HIDE: return {...state,isShow:false};
        default: return state;
    }
}
export default loading_reducers;