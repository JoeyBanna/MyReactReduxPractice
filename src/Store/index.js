import { createStore } from "redux";


const reducerFn=(state = {counter:10}, action)=>{
    // SHOULD BE SYNCHRONOUS
    //SHOULD NOT MUTATE ORIGINAL STATE
    if(action.type =='INC'){
        return {counter:state.counter+1}
    }
   
    if(action.type == "DIC"){
      return {counter:state.counter-1}
    }
    if(action.type == 'add'){
        return {counter:state.counter + action.payload}
    }
    
return state;
}

export const store= createStore(reducerFn);