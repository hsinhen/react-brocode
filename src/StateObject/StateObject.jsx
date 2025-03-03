import { useState } from "react";
function StateObject() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelhange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  const [food, setFood] = useState(["apple", "banana", "orange", "watermelon"]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    if (newFood.trim() == "") return;
    setFood((e) => [...e, newFood]);
    document.getElementById("foodInput").value = "";
  }
  function handleRemoveFood(i) {
    setFood(food.filter((e, index) => index !== i));
  }
  return (
    <div>
      <p>
        Your favourite car is: {car.year}, {car.make}, {car.model} <br />
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelhange} />
        <br />
        <br />
        <h2>List of Food</h2>
        <ul>
          {food.map((e, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
              {e}
            </li>
          ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add food</button>
      </p>
    </div>
  );
}
export default StateObject;
