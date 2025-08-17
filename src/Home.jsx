import React from "react";

function Home() {
  const handleClick = (e) => {
    console.log("Click me", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("Hello", name, e.target);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("John", e)}>
        Click me again
      </button>
    </div>
  );
}

export default Home;
