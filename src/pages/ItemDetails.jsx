import { Link, useParams } from 'react-router-dom';
import ListItem from '../components/ListItem';
import UpdateRecipe from '../components/UpdateRecipe';

function ItemDetails(props) {
  const { recipeId } = useParams();

  const recipeItem = props.allRecipes.find((elementObj) => {
    return elementObj.id === recipeId;
  });

  return (
    <div className="ItemDetails">
      <UpdateRecipe recipe={recipeItem} updateRecipe={props.updateRecipe} />
      <div className="recipe-info">
        <div>
          <img src={recipeItem.image} alt="image" className="recipes-image" />
        </div>
        <div className="recipes-info-details">
          <h2>
            <strong>{recipeItem.name}</strong>
          </h2>
          <p>
            <strong>Kcal:</strong> {recipeItem.calories}
          </p>
          <p>
            <strong>Servings:</strong> {recipeItem.servings}
          </p>
          {recipeItem.calories < 250 ? <p>✔️</p> : <p>❌</p>}
          <button className="back-btn">
            <Link to="/">Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
