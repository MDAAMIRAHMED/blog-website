import React, { useState } from "react";

function Home() {
  //   let name = "John";
  const [name, setName] = useState("John");
  const [age, setAge] = useState(20);
  const handleClick = (e) => {
    // name = "wick";
    // console.log(name);
    setName("Wick");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;
