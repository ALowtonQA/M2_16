import { useRef } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function NewBlog() {

    const authorRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();

    const navigate = useNavigate(); // programatically navigate

    function submitHandler(event) {
        event.preventDefault(); // Stops default submission behaviour for the form (keeps us on the same page)
        const data = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            body: bodyRef.current.value
        };
        addBlog(data);
    }

    function addBlog(data) {
        fetch('http://localhost:4000/blogs', {
            method: 'POST', // create
            body: JSON.stringify(data), // data needs converting to JSON string first
            headers: { 'Content-Type': 'application/json' } // Tells the server to expect JSON data
        }).then(() => { navigate('/') });
    }

    return(
        <Card>
            <form onSubmit={submitHandler}>
                <label>Title</label> <input type="text" ref={titleRef} />
                <label>Author</label> <input type="text" ref={authorRef} />
                <label>Body</label> <input type="text" ref={bodyRef} />
                <button>Add blog</button>
            </form>
        </Card>
    )
}

export default NewBlog;

