import ListItem from './ListItem';

function RecipesList(props) {
  return (
    <div className="recipes-list">
      {props.allRecipes.map((elementObj) => {
        return <ListItem key={elementObj.id} allRecipes={elementObj} callbackToDelete={props.callbackToDelete} />;
      })}
    </div>
  );
}

export default RecipesList;
