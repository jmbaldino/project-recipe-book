import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import RecipesList from './components/RecipesList'

import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='content'>
        <Sidebar />
        <RecipesList />
      </div>
      <Footer />
    </>
  )
}

export default App
