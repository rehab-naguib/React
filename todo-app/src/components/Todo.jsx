import { useDispatch, useSelector } from "react-redux";
import { addTodoItem } from "../redux";
import { useState } from "react";
import { deleteItem } from "../redux";


const Todo = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const todoItemList = useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    const addTodo = (item) => {
        dispatch(addTodoItem(item));
    }
    const deleteTodo = (index) => {
        dispatch(deleteItem(index));
        console.log(todoItemList.length);
    }
    const handleSubmission = (e) => {
        e.preventDefault();
        addTodo({ title, content });
        setTitle("");
        setContent("");
    };
    return (
        <>
            <form onSubmit={handleSubmission}>
                <div className="text-center w-25 mx-auto my-4">
                    <h2>Todo List</h2>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                            value={title}
                            className="form-control" name="title"
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea className="form-control"
                            value={content}
                            name="content" rows="3"
                            onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Add todo</button>
                </div>
            </form>
            <div className="container">
                <div className="row">
                    {
                        todoItemList.length > 0 ?
                            todoItemList.map((item, index) => {


                                return (
                                    <div className="col-3 mx-4 my-2">
                                        <div className="card">
                                            <div className="card-body text-center " >
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">{item.content}</p>
                                                <button onClick={() => { deleteTodo(index) }} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })

                            :
                            <h3 className="text-center ">There is no List Items yet</h3>
                    }
                </div>
            </div>
        </>
    );
}
export default Todo;