function ImageClick() {
  const imageurl = "https://picsum.photos/200/300";

  const handleClick = (e) => {
    console.log("hi bye");
    e.target.style.display = "none";
  };

  return <img onClick={(e) => handleClick(e)} src={imageurl}></img>;
}

export default ImageClick;
