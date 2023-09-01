import './App.css'

import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/Home-page'
import Profilepage from './components/Profile-page'
import Projects from './components/projects'

function App() {
  
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/portfolio" element={<Profilepage/>} />
        <Route path="/contact" element={<Profilepage/>} />
        <Route path="/projects" element={<Projects/>} />
        </Routes>
    </Router>
  )
}

export default App
