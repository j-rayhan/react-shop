"use strict"
import {createStore} from 'redux';
//STEP 3 define reducers
const reducer = function(state =0, action){
  switch (action.type) {
    case "INC":
      return state + action.payload;
      break;
  }
  return state
}

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function(){
  console.log('current state is: '+ store.getState());
})

//STEP 2 create and dispatch action
store.dispatch({type:"INC", payload:1})
store.dispatch({type:"INC", payload:1})
store.dispatch({type:"INC", payload:1})
