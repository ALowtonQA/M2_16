import BlogList from "./components/BlogList";
import allBlogs from "./json/blogData.json";
import { useState } from "react";

function App() {

  const [blogs, setBlogs] = useState(allBlogs);

  function deleteBlog(id) {
    let filteredBlogs = blogs.filter((blog) => { return blog.id != id });
    // let filteredBlogs = blogs.filter(blog => blog.id != id); // same as above, but shorter.

    setBlogs(filteredBlogs); // overwrite our state and trigger a rerender with the NEW data
  }
  
  return(
    <BlogList blogs={blogs} deleteBlog={deleteBlog}/>
  )
}

export default App;
