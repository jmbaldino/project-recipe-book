import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import recipes from './assets/data/recipes.json';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ItemDetails from './pages/ItemDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

import './index.css';

function App() {
  const [recipesArr, setRecipesArr] = useState(recipes);

  const addRecipe = (recipeToAdd) => {
    const newList = [recipeToAdd, ...recipesArr];
    setRecipesArr(newList);
  };

  const deleteRecipe = (recipeToBeDeleted) => {
    const newList = recipesArr.filter((recipe) => recipe.id !== recipeToBeDeleted);
    setRecipesArr(newList);
  };

  const updateRecipe = (recipeToBeUpdated) => {
    console.log(recipesArr);

    const newList = recipesArr.map((recipe) => {
      if (recipe.id === recipeToBeUpdated.id) {
        return (recipe = recipeToBeUpdated);
      } else {
        return recipe;
      }
    });

    setRecipesArr(newList);
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={<Dashboard allRecipes={recipesArr} callbackToDelete={deleteRecipe} callbackToAdd={addRecipe} />}
          />
          <Route
            path="/details/:recipeId"
            element={<ItemDetails allRecipes={recipesArr} updateRecipe={updateRecipe} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
