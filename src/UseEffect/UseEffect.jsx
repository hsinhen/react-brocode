import { useEffect, useState } from "react";
function UseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener remove");
    };
  }, []);
  useEffect(() => {
    document.title = `size ${width} x ${height}`;
  }, [width, height]);
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>window height {height}</p>
      <p>window width {width}</p>
    </>
  );
}
export default UseEffect;
