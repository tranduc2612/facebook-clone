import Context from './Context'
import { useReducer } from 'react'
import reducer,{initializeState} from './reducer'

function Provider({children}){
    const [state,dispatch] = useReducer(reducer,initializeState);

    return(
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider