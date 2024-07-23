import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';

function App() {
  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [selectedDay, setSelectedDay] = useState(false);
  useEffect (() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])
  const addMeal = () => {
    const newMeal = {
      title: "Today is...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans ([newMeal, ...mealPlans])
  }
  const deleteDay = (mealId) => {
    setMealPlans (mealPlans.filter (({id}) => id !== mealId))
  }
  const updateDay = (myUpdatedMeal) => {
    const updatesMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatesMeals)
  }
  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  }
  return (
    <div className="App">
      <div>
        <MyList 
        mealPlans={mealPlans} 
        addMeal={addMeal} 
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        />
        <button  className="deleteAll" onClick={()=> setMealPlans([])}>Delete all</button>
      </div>
      <MyMealsAndIngredients
      selectedDay={getActiveMeal()}
      updateDay={updateDay}
      />
    </div>
  );
}
export default App;
