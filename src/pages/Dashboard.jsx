import RecipesList from '../components/RecipesList';

function Dashboard(props) {
  return <RecipesList allRecipes={props.allRecipes} callbackToDelete={props.callbackToDelete} />;
}

export default Dashboard;
