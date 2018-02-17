"use strict"
import {createStore} from 'redux';
//STEP 3 define reducers
const reducer = function(state =[], action){
  switch (action.type) {
    case "POST_BOOK":
      return state = action.payload;
      break;
  }
  return state
}

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function(){
  console.log('current state is: ',store.getState());
  console.log('current state price: ', store.getState()[1].price);
})

//STEP 2 create and dispatch action
store.dispatch({
	type:"POST_BOOK",
	payload:[{
		id:1,
		title: 'this is the book title',
		description: 'this is the book discription',
		price: 33.33
	},{
		id:2,
		title: 'this is the second book title',
		description: 'this is the second book discription',
		price: 38
	}]
})
