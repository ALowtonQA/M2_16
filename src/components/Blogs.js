import BlogList from "./BlogList";
import { useState, useEffect } from "react";

function Blogs() {

    const [blogs, setBlogs] = useState(null); // state variable to hold blog data

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
            .then((res) => {
                return res.json();
            }).then((data) => {
                setBlogs(data);
            });
    }, []);

    function deleteBlog(id) {
      let filteredBlogs = blogs.filter((blog) => { return blog.id != id });
      // let filteredBlogs = blogs.filter(blog => blog.id != id); // same as above, but shorter.
  
      setBlogs(filteredBlogs); // overwrite our state and trigger a rerender with the NEW data
    }

    return (
        <>
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/>}
        </>
    )
}

export default Blogs;