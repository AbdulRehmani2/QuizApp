import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import TestMenu from './components/TestMenu'
import Question from './components/Question'

function App() {

	const [userName, setUserName] = useState('Anon');

  return (
	<>
	  <BrowserRouter>
			<Routes>
		  		<Route path='/' element={<TestMenu setUserName={setUserName}></TestMenu>}></Route>	
				<Route path='/quiz' element={<Question name={userName}></Question>}></Route>
			</Routes>
	  </BrowserRouter>
	</>
  )
}

export default App
