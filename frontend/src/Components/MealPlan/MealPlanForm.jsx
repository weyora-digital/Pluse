import React, { useState } from 'react';
import axios from 'axios'; 

const MealPlanForm = ({ onSuccess }) => {
  const [mealPlan, setMealPlan] = useState({
    title: '',
    description: '',
    dietType: '',
    recipes: '',
    nutritionalInfo: '',
    portionSizes: ''
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setMealPlan({ ...mealPlan, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);  // Update the file state to the new uploaded file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
        alert('Please upload an image for the meal plan.');
        return;
      }
    const formData = new FormData();  // Use FormData to handle file data in POST request
    console.log(mealPlan);
    formData.append('file', file);
    formData.append('mealPlanJson', JSON.stringify(mealPlan));
    // addMealPlan(formData);

    

    try {
        console.log(formData.getAll("file"));
        // You might need to adjust the URL based on your server configuration
        const response = await axios.post('/api/mealplan/createmealplan', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Success:', response.data);
        onSuccess && onSuccess(response.data);  // Trigger any success action
        alert('Meal plan created successfully!');
      } catch (error) {
        console.error('Error creating meal plan:', error);
        alert('Failed to create meal plan.');
    }

    setMealPlan({
      title: '',
      description: '',
      dietType: '',
      recipes: '',
      nutritionalInfo: '',
      portionSizes: ''
    });
    setFile(null);
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input
          type="text"
          name="title"
          value={mealPlan.title}
          onChange={handleChange}
          placeholder="Title"
          className="input input-bordered input-primary w-full max-w-xs"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="file file-bordered w-full max-w-xs"
          required
        />
        <textarea
          name="description"
          value={mealPlan.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea textarea-bordered h-24"
          required
        />
        <select
          name="dietType"
          value={mealPlan.dietType}
          onChange={handleChange}
          className="select select-bordered w-full max-w-xs"
          required
        >
          <option disabled value="">Select Diet Type</option>
          <option value="Keto">Keto</option>
          <option value="Paleo">Paleo</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Low-Carb">Low-Carb</option>
          <option value="High-Protein">High-Protein</option>
        </select>
        <textarea
          name="recipes"
          value={mealPlan.recipes}
          onChange={handleChange}
          placeholder="Recipes"
          className="textarea textarea-bordered h-24"
          required
        />
        <textarea
          name="nutritionalInfo"
          value={mealPlan.nutritionalInfo}
          onChange={handleChange}
          placeholder="Nutritional Information"
          className="textarea textarea-bordered h-24"
          required
        />
        <input
          type="text"
          name="portionSizes"
          value={mealPlan.portionSizes}
          onChange={handleChange}
          placeholder="Portion Size"
          className="input input-bordered input-primary w-full max-w-xs"
          required
        />
        {/* Add more fields as necessary */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MealPlanForm;
