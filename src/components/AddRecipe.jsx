import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function AddRecipe(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    // create unique id using uuid (npm install uuid required)
    const newId = uuidv4();

    const newRecipe = {
      id: newId,
      name: name,
      calories: calories,
      image: image,
      servings: servings,
    };
    console.log(newRecipe);

    // call function on parent component to add newRecipe to Array
    props.callbackToAdd(newRecipe);
    // reset values
    setName('');
    setCalories(0);
    setImage('');
    setServings(1);
  };

  return (
    <div className="add-recipe">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="recipe title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input
            id="calories"
            type="number"
            name="calories"
            placeholder="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="text"
            name="image"
            placeholder="image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="servings">Servings:</label>
          <input
            id="servings"
            type="number"
            name="servings"
            placeholder="number of servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>

  );
}

export default AddRecipe;
