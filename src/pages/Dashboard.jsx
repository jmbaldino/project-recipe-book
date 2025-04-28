import AddRecipe from '../components/AddRecipe';
import RecipesList from '../components/RecipesList';

function Dashboard(props) {
  return (
    <div>
      <AddRecipe callbackToAdd={props.callbackToAdd} />
      <RecipesList allRecipes={props.allRecipes} callbackToDelete={props.callbackToDelete} />
    </div>
  );
}

export default Dashboard;
