import { Gifs } from './components/Gifs/Gifs'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/search/:keyword/:rating/:lang' element={<Gifs />} />
			</Routes>
		</div>
	)
}

export default App
