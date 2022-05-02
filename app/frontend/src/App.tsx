import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import ResultPage from './pages/ResultPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route  path="/" element={<FormPage/>}/>
				<Route  path="/results" element={<ResultPage/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
