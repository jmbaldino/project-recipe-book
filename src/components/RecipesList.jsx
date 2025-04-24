import recipes from '../assets/data/recipes.json';
import { useState } from 'react';
import ListItem from './ListItem';

function RecipesList() {
  const [recipesArr, setRecipesArr] = useState(recipes);

  const deleteRecipe = (recipeToBeDeleted) => {
    const newList = recipesArr.filter((recipe) => recipe.id !== recipeToBeDeleted);

    setRecipesArr(newList);
  };

  return (
    <div className="recipes-list">
      {recipesArr.map((elementObj) => {
        return <ListItem key={elementObj.id} allRecipes={elementObj} callbackToDelete={deleteRecipe} />;
      })}
    </div>
  );
}

export default RecipesList;
