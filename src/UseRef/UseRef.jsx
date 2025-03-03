import { useEffect, useRef, useState } from "react";
function UseRef() {
  const input = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  useEffect(() => {
    console.log("Component Rendered");
    console.log(input);
  });
  function handleClick() {
    input.current.focus();
    input.current.style.backgroundColor = "yellow";
    input2.current.style.backgroundColor = "white";
    input3.current.style.backgroundColor = "white";
  }
  function handleClick2() {
    input2.current.focus();
    input.current.style.backgroundColor = "white";
    input2.current.style.backgroundColor = "yellow";
    input3.current.style.backgroundColor = "white";
  }
  function handleClick3() {
    input3.current.focus();
    input.current.style.backgroundColor = "white";
    input2.current.style.backgroundColor = "white";
    input3.current.style.backgroundColor = "yellow";
  }
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <input ref={input} />
      <br />
      <button onClick={handleClick2}>Click Me 2</button>
      <input ref={input2} />
      <br />
      <button onClick={handleClick3}>Click Me 3</button>
      <input ref={input3} />
      <br />
    </>
  );
}
export default UseRef;
