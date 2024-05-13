import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MealPlanList = () => {
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    const fetchMealPlans = async () => {
      const res = await axios.get('http://localhost:8080/api/getallmealplans');
      setMealPlans(res.data);
    };
    fetchMealPlans();
  }, []);

  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold underline">Meal Plans</h2>
      {mealPlans.map((plan) => (
        <div key={plan.id} className="card w-96 bg-base-100 shadow-xl m-2">
          <div className="card-body">
            <h2 className="card-title">{plan.title}</h2>
            <p>{plan.description}</p>
            {/* Display more data as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealPlanList;
