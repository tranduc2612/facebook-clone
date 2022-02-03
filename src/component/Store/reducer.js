const initializeState = {
    user:null,
};

const actionTypes = {
    SET_USER: 'SET_USER'
}

const reducer = (state,action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user
            }
        default:
            console.error('Invalid');    
    }
}

export {initializeState,actionTypes}
export default reducer