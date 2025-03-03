import { useState } from "react";
function StateObjectArray() {
  const [cars, setCars] = useState([
    {
      year: 2024,
      make: "Ford",
      model: "Mustang",
    },
  ]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCatModel] = useState("");
  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCatModel("");
  }
  function handleRemoveCar(i) {
    setCars(cars.filter((element, index) => index !== i));
  }
  function handleChangeYear(event) {
    setCarYear(event.target.value); // Corrected state update
  }
  function handleChangeMake(event) {
    setCarMake(event.target.value); // Corrected state update
  }
  function handleChangeModel(event) {
    setCatModel(event.target.value); // Corrected state update
  }
  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((e, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {e.year}, {e.make}, {e.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={handleChangeYear}
        placeholder="Enter car year"
      ></input>
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleChangeMake}
        placeholder="Enter car make"
      ></input>
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleChangeModel}
        placeholder="Enter car model"
      ></input>
      <br />
      <button onClick={handleAddCar}>Add car</button>
      <br />
    </div>
  );
}
export default StateObjectArray;
