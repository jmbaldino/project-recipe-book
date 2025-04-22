import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <div className = "content">
      <Sidebar />
      <div className = "block"></div>
    </div>
    <Footer/>
    </>
  )
}

export default App
