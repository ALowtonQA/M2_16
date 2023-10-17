import allBlogs from "../json/blogData.json";
import BlogList from "./BlogList";
import { useState } from "react";

function Blogs() {

    const [blogs, setBlogs] = useState(allBlogs); // state variable to hold blog data

    function deleteBlog(id) {
      let filteredBlogs = blogs.filter((blog) => { return blog.id != id });
      // let filteredBlogs = blogs.filter(blog => blog.id != id); // same as above, but shorter.
  
      setBlogs(filteredBlogs); // overwrite our state and trigger a rerender with the NEW data
    }

    return (
        <BlogList blogs={blogs} deleteBlog={deleteBlog}/>
    )
}

export default Blogs;