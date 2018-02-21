"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'

// React 
import React from 'react'
import {render} from 'react-dom'

import {Provider} from 'react-redux'

//Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
//Import Reducers
import reducers from './reducers';
//Import Actions
import {addToCart} from './actions/cartActions';
import {getBooks, deleteBook, updateBook} from './actions/bookActions'



// STEP 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList'

render(
	<Provider store={store}>
		<BooksList />
	</Provider>,document.getElementById('app')
	);
// store.subscribe(function(){
//   console.log('current new state is: ',store.getState());
// })

//STEP 2 create and dispatch action
// store.dispatch(postBooks(
			// [{
			// 	id:1,
			// 	title: 'this is the book title',
			// 	description: 'this is the book discription',
			// 	price: 33.33
			// },{
			// 	id:2,
			// 	title: 'this is the second book title',
			// 	description: 'this is the second book discription',
			// 	price: 38
			// }]
// 	))

// //delete book  
// store.dispatch(deleteBook({id: 1}))

// //update action  
// store.dispatch(updateBook(
// 	{
// 		id:2,
// 		title: 'this is the update book title',
// 		price: 50
// 	}
// ))


//-------------- CART ACTION ----------------

//ADD TO CART  
store.dispatch(addToCart([{id:2}]))

