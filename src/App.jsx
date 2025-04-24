import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ItemDetails from './pages/ItemDetails';

import './index.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details/:recipeId" element={<ItemDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
