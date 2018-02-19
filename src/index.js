"use strict"
import {createStore} from 'redux';
//STEP 3 define reducers
const reducer = function(state ={books:[]}, action){
  switch (action.type) {
    case "POST_BOOK":
    return {books: [...state.books, ...action.payload]};
    break;

    case "DELETE_BOOK":
    //CREATE A COPY OF THE CURRENT ARRAY OF BOOKS
    const currentBooks = [...state.books];
    //DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE DELETED
    const indexToDelete = currentBooks.findIndex(
	    	function(book){
	    		return book.id === action.payload.id;
	    	}
    	)
    // USE SLICE TO REMOVE THE BOOK AT THE SPECIFIED INDEX
    return {books: [...currentBooks.slice(0, indexToDelete), ...currentBooks.slice(indexToDelete + 1)]};
    break;

    case "UPDATE_BOOK":
    //CREATE A COPY OF THE CURRENT ARRAY OF BOOKS
    const currentBooksToUpdate = [...state.books];
    //DETERMINE AT WHICH INDEX IN BOOKS ARRAY IS THE BOOK TO BE DELETED
    const indexToUpdate = currentBooksToUpdate.findIndex(
	    	function(book){
	    		return book.id === action.payload.id;
	    	}
    	)
    // CREATE A NEW BOOK BOJECT WITH THE NEW VALUES AND WITH THE SAME ARRAY INDEX OF THE ITEM WE WANT TO
    // REPLACE. TO ACHIEVE THIS WE WILL USE ...SPREAD BUT WE COULD USE CONCAT METHOS TO
    const newBookToUpdate = {
    	...currentBooksToUpdate[indexToUpdate],
    	title: action.payload.title
    }
    console.log('what is it newBookToUpdate ', newBookToUpdate);
    // USE SLICE TO REMOVE THE BOOK AT THE SPECIFIED INDEX, REPLACE WITH THE NEW OBJECT ANC CONCATE WITH 
    // THE REST OF ITEMS IN THE ARRAY
    return {books: [...currentBooksToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBooksToUpdate.slice(indexToUpdate + 1)]};
    break;
  }
  return state
}

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function(){
  console.log('current new state is: ',store.getState());
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

//delete action  
store.dispatch({
	type:"DELETE_BOOK",
	payload:{id:1}
})

//update action  
store.dispatch({
	type:"UPDATE_BOOK",
	payload:{id:2,title: 'New update title'}
})
