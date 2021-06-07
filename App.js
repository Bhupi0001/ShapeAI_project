import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Note from './components/layouts/Note';

function App() {
	return (
		<div className="App">
			<Header />
			<Footer />
			<Note />
		</div>
	);
}

export default App;
