import { Link, useParams } from 'react-router-dom';
import ListItem from '../components/ListItem';

function ItemDetails(props) {
  const { recipeId } = useParams();

  const recipeItem = props.allRecipes.find((elementObj) => {
    return elementObj.id === recipeId;
  });
  // implement display item details
  return (
    <div className="recipe">
      <div>
        <img src={recipeItem.image} alt="image" className="recipes-image" />
      </div>
      <div className="recipes-info">
        <h2>{recipeItem.name}</h2>
        <p>calories: {recipeItem.calories}</p>
        <p>servings: {recipeItem.servings}</p>
        {recipeItem.calories < 250 ? <p>✔️</p> : <p>❌</p>}
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;
