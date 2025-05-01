import { useState } from 'react';

function UpdateRecipe(props) {
  const [name, setName] = useState(props.recipe.name);
  const [calories, setCalories] = useState(props.recipe.calories);
  const [image, setImage] = useState(props.recipe.image);
  const [servings, setServings] = useState(props.recipe.servings);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      id: props.recipe.id,
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };

    props.updateRecipe(newDetails);
  };

  return (
    <div className="UpdateRecipe add-recipe">
      <h3>Edit Recipe</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="edit recipe name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Calories:</label>
          <input
            type="number"
            name="calories"
            placeholder="edit recipe calories"
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            name="image"
            placeholder="edit recipe image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="servings">Servings:</label>
          <input
            type="text"
            name="servings"
            placeholder="edit recipe servings"
            value={servings}
            onChange={(e) => {
              setServings(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateRecipe;
