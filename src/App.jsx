import './App.css'

import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/Home-page'
import Profilepage from './components/Profile-page'

function App() {
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio" element={<Profilepage/>} />
        </Routes>
    </Router>
  )
}

export default App
