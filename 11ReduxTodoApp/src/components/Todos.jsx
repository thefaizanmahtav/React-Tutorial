import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/todo/todoSlice';
import AddTodo from './AddTodo';


function Todos() {
    const todos = useSelector((state) => state.todos)
    const todoDispatch = useDispatch()

    return (
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-6 py-5 bg-slate-50 text-[#172842]">
                <h1 className="text-3xl font-bold text-center mb-8 mt-2 text-[#172842]">Manage Your Todos</h1>
                <AddTodo />
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <div
                            key={todo.id}
                            className="flex justify-between items-center mb-4 p-3 bg-gray-200 rounded-lg shadow-sm"
                        >
                            <span className="text-lg">{todo.text}</span>

                            <button
                                className="inline-flex w-8 h-8 rounded-full text-sm border border-gray-300 justify-center items-center text-white hover:bg-red-500 duration-150"
                                onClick={() => todoDispatch(removeTodo(todo.id))}
                            >
                                ❌
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-lg">No todos available. Add some to get started!</p>
                )}

            </div>
        </div>
    )
}

export default Todos