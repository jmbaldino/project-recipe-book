import { Link } from 'react-router-dom';

function ListItem(props) {
  return (
    <div className="recipe">
      <div>
        <img src={props.allRecipes.image} alt="image" className="recipes-image" />
      </div>
      <div className="recipes-info">
        <h2>{props.allRecipes.name}</h2>
        <button className='btn-details'>
          <Link to={`/details/${props.allRecipes.id}`}>Details</Link>
        </button>
        <button
          className="btn-delete"
          onClick={() => {
            props.callbackToDelete(props.allRecipes.id);
          }}
        >
          Delete Recipe
        </button>
      </div>
    </div>
  );
}

export default ListItem;
