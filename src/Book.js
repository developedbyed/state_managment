import React from 'react';

const Book = ({ name, price, addCart, index }) => {
	return (
		<div>
			<h1>{name}</h1>
			<h3>{price}</h3>
			<button onClick={() => addCart(index)}>Add to cart</button>
		</div>
	);
};

export default Book;
