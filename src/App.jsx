import React from "react"
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Header from "./components/Header"
import Tasks from "./pages/Tasks"
import About from "./pages/About"



function App() {


  return (
    <div>
      <Header />
    

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="tasks" element={ <Tasks />} />
        <Route path="about" element={ <About />} />   

      </Routes>
    </div>
  )
}

export default App
