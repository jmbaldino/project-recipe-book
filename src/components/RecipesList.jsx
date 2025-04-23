import recipes from "../assets/data/recipes.json"
import {useState} from "react"



function RecipesList() {

    const [recipesArr , setRecipesArr] = useState(recipes)

    const deleteRecipe = (recipeToBeDeleted) => {
        
        const newList = recipesArr.filter(recipe => recipe.id !== recipeToBeDeleted)

        setRecipesArr(newList)
    }


    return (
        <div className="recipes-list">
            {recipesArr.map((elementObj) => {
                return (
                    <div key={elementObj.id} className="recipe">
                        <div>
                            <img src={elementObj.image} alt="image" className="recipes-image" />
                        </div>
                        <div className="recipes-info">
                            <h2>{elementObj.name}</h2>
                            <p>calories: {elementObj.calories}</p>
                            <p>servings: {elementObj.servings}</p>
                            {elementObj.calories < 250 ? <p>✔️</p> : <p>❌</p>}
                            <button onClick = {() => {deleteRecipe(elementObj.id)}}>Delete Recipe</button>
                        </div>
                    </div>
                )
            }
            )}</div>
    )
}

export default RecipesList