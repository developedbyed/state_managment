import React from 'react';
import './App.css';
import BookList from './BookList';
import Cart from './Cart';

function App() {
	return (
		<div className="App">
			<Cart />
			<BookList />
		</div>
	);
}

export default App;
