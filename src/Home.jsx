import React, { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "title-1", body: "lorem ipsum...", author: "John", id: 1 },
    { title: "title-2", body: "lorem ipsum...", author: "Wick", id: 2 },
    { title: "title-3", body: "lorem ipsum...", author: "John", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
