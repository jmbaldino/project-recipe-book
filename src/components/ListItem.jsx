import { Link } from 'react-router-dom';

function ListItem(props) {
  return (
    <div className="recipe">
      <div>
        <img src={props.allRecipes.image} alt="image" className="recipes-image" />
      </div>
      <div className="recipes-info">
        <h2>{props.allRecipes.name}</h2>
        <p>calories: {props.allRecipes.calories}</p>
        <p>servings: {props.allRecipes.servings}</p>
        {props.allRecipes.calories < 250 ? <p>✔️</p> : <p>❌</p>}
        <button
          onClick={() => {
            props.callbackToDelete(props.allRecipes.id);
          }}
        >
          Delete Recipe
        </button>
        <button>
          <Link to={`/details/${props.allRecipes.id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
}

export default ListItem;
