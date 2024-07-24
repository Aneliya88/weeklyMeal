const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
return <div>
    <div className="header">
        <h1>Weekly Meal Plan Ideas</h1>
        <button className="button-add"onClick={addMeal}>Add</button>
    </div>
    <div className="list">
        {mealPlans.map(({id, title, mealForADay}) => (
            <div className={`meal ${id === selectedDay ? "selected" : "default"}`}
            onClick={() => setSelectedDay(id)}>
                <p className="title">{title}</p>
                <p>{mealForADay.substring(0, 35)}</p>
                <button className="button-delete" onClick={()=> deleteDay(id)}>Delete</button>
            </div>
        ))}
    </div>
</div>
}
export default MyList;