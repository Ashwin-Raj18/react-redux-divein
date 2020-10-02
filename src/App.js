import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store';

function App () {
	return (
		<Provider store={store}>
			<div className="App">
				<Postform />
				<h1>Welcome to react-redux-diveIn</h1>
				<Posts />
			</div>
		</Provider>
	);
}

export default App;
