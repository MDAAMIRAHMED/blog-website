import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "title-1", body: "lorem ipsum...", author: "John", id: 1 },
    { title: "title-2", body: "lorem ipsum...", author: "Wick", id: 2 },
    { title: "title-3", body: "lorem ipsum...", author: "John", id: 3 },
  ]);

  const [name, setName] = useState("John");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // it runs for every re-render
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
    // console.log(blogs);
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Wick")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;
