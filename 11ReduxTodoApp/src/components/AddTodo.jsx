import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todo/todoSlice';


function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input.trim()){
            dispatch(addTodo(input))
            setInput('')
        }
    }

    return (
        <form className="flex w-full max-w-md mx-auto mb-5" onSubmit={addTodoHandler}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-gray-300 rounded-l-lg px-4 py-2 outline-none duration-150 bg-gray-100 focus:bg-white focus:ring-2 focus:ring-green-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                type="submit" 
                className="rounded-r-lg px-4 py-2 bg-green-600 text-white hover:bg-green-700 duration-150"
            >
                Add
            </button>
        </form>
    )
}

export default AddTodo
