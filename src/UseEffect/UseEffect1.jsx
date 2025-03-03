import { useEffect, useState } from "react";
function UseEffect1() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `Count ${count}, ${color}`;
  }, [count]);
  function handleAddCount() {
    setCount(count + 1);
  }
  function handleStractCount() {
    setCount(count - 1);
  }
  function changeColor() {
    setColor(color === "green" ? "red" : "green");
  }
  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={handleAddCount}>Add</button>
      <button onClick={handleStractCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change color</button>
    </>
  );
}
export default UseEffect1;
