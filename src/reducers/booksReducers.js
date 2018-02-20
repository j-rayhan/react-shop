"use strict"

//Book reducers
export function booksReducers(state ={books:[]}, action){
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
    	title: action.payload.title,
        price: action.payload.price
    }
    console.log('what is it newBookToUpdate ', newBookToUpdate);
    // USE SLICE TO REMOVE THE BOOK AT THE SPECIFIED INDEX, REPLACE WITH THE NEW OBJECT ANC CONCATE WITH 
    // THE REST OF ITEMS IN THE ARRAY
    return {books: [...currentBooksToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBooksToUpdate.slice(indexToUpdate + 1)]};
    break;
  }
  return state
}
