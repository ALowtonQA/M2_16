import BlogList from "./BlogList";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function Blogs() {

    const [blogs, setBlogs] = useState(null); // state variable to hold blog data
    const [isLoading, setIsLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch("http://localhost:4000/blogs")
            .then((res) => {

                if (!res.ok) {
                    throw new Error("Could not get data for that resource.")
                }

                return res.json();
            }).then((data) => {
                setTimeout(() => {
                    setIsLoading(false);
                    setError(null);
                    setBlogs(data);
                }, 2000);
            }).catch((err) => {
                setIsLoading(false);
                setError(err.message);
            })
    }, []); // Empty dependency array so the code only runs once

    function deleteBlog(id) {
      let filteredBlogs = blogs.filter((blog) => { return blog.id != id });
      // let filteredBlogs = blogs.filter(blog => blog.id != id); // same as above, but shorter.
  
      setBlogs(filteredBlogs); // overwrite our state and trigger a rerender with the NEW data
    }

    return (
        <>
            {error && <div> {error} </div>}
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/>}
            {isLoading && <Spinner />}
        </>
    )
}

export default Blogs;