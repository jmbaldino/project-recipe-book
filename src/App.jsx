import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import recipes from './assets/data/recipes.json';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';

import './index.css';

function App() {
  const [recipesArr, setRecipesArr] = useState(recipes);

  const deleteRecipe = (recipeToBeDeleted) => {
    const newList = recipesArr.filter((recipe) => recipe.id !== recipeToBeDeleted);

    setRecipesArr(newList);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard allRecipes={recipesArr} callbackToDelete={deleteRecipe} />} />
          <Route path="/details/:recipeId" element={<ItemDetails allRecipes={recipesArr} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
