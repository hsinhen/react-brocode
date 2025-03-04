import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(10);
  const [employed, setEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateEmploye = () => {
    setEmployed(!employed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Click me</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>+ Age</button>
      <p>Employed: {employed ? "Yes" : "No"} </p>
      <button onClick={updateEmploye}>Change occupation</button>
    </div>
  );
}

export default MyComponent;
