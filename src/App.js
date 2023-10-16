import BlogList from "./components/BlogList";
import allBlogs from "./json/blogData.json";

function App() {
  function deleteBlog(id) {
    allBlogs = allBlogs.filter((blog) => { return blog.id != id });
    // allBlogs = allBlogs.filter(blog => blog.id != id); // same as above, but shorter.
  }
  
  return(
    <BlogList blogs={allBlogs} deleteBlog={deleteBlog}/>
  )
}

export default App;
