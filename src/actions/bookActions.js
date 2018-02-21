"use strict"

// 	Get BOOKS
export function	getBooks(book){
	return {
		type: "GET_BOOK"
	}
}

// DELETE BOOK
export function	deleteBook(id){
	return {
			type: "DELETE_BOOK",
			payload: id
		}
}

// UPDATE BOOK
export function	updateBook(book){
	return {
		type: "UPDATE_BOOK",
		payload: book
	}
}