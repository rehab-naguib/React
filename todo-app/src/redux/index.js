import { createStore } from "redux";

// action types
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// actions "pure javascript function return object"
export const addTodoItem = (payload) => {
    return {
        type: ADD_TODO,
        payload

    }

}
export const deleteItem = (index) => {
    return {
        type: DELETE_TODO,
        index,

    }

}

// initial state "javascript object"
const initialState = {
        todoList: [],
    }
    // reducers
const todoReducer = (state = initialState, action) => {
        if (action.type === ADD_TODO) {
            return { todoList: [...state.todoList, action.payload] }

        } else if (action.type === DELETE_TODO) {
            return { todoList: [...state.todoList.filter((item, i) => i !== action.index)] }
        }
        return state;
    }
    // store
export const store = createStore(todoReducer);