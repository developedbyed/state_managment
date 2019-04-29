import React, { useState, useEffect } from 'react';
import Book from './Book';

const BookList = () => {
	useEffect(() => {
		console.log(cart);
	});

	const [books, setBooks] = useState([
		{ name: 'Harry Potter', price: '$10' },
		{ name: 'Game of Thrones', price: '$15' },
		{ name: 'Great Gatsby', price: '$20' },
		{ name: 'Homebois', price: '$23' }
	]);

	const [cart, setCart] = useState([]);

	const addCart = index => {
		setCart(prevCart => [...prevCart, books[index]]);
	};

	return (
		<div>
			{books.map((book, index) => (
				<Book
					name={book.name}
					price={book.price}
					addCart={addCart}
					index={index}
				/>
			))}
		</div>
	);
};

export default BookList;
