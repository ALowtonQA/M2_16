import BlogList from "./components/BlogList";
import allBlogs from "./json/blogData.json";

function App() {
  return(
      <BlogList blogs={allBlogs}/>
  )
}

export default App;
