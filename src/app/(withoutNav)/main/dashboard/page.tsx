'use client';

import { IoMdRocket } from "@react-icons/all-files/io/IoMdRocket";
import { CgTrash } from "@react-icons/all-files/cg/CgTrash";
import { TiDocumentText } from "@react-icons/all-files/ti/TiDocumentText";
import { FaLock } from "@react-icons/all-files/fa/FaLock";
import { FaUnlock } from "@react-icons/all-files/fa/FaUnlock";
import { useState, useEffect, useCallback } from "react";
import { TodoObject } from "../../../../types/Todo";
import React from 'react';
import { Pagination } from "@nextui-org/pagination";
import { Button } from "@nextui-org/button";
import { addTodo, markTodoDone, handleDeleteTodo, toggleIsUnlocked } from './todoFunctions';
import { renderErrorState, renderLoadingState } from "../../../../utils/errorHandling";
import useSWR from 'swr';
import fetcher from "../../../../lib/fetcher";

const TodoList: React.FunctionComponent = () => {
    // State declarations
    const [newTodo, setNewTodo] = useState<TodoObject[]>([]);
    const [todo, setTodo] = useState<string>('');
    const [showPopup, setShowPopup] = useState(false);
    const [count, setCount] = useState(0);
    const [markCount, setMarkCount] = useState(0);
    const [displayVisible, setDisplayVisible] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 6;
    const [darkMode, setDarkMode] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    // Fetch todos
    const { data, error } = useSWR('/api/todos', fetcher);

    // Handle data updates
    useEffect(() => {
        if (data) {
            setNewTodo(data);
            setCount(data.length);
            setMarkCount(data.filter(todo => todo.is_completed).length);
            setDisplayVisible(data.length === 0);
        }
    }, [data]);

    // Handle adding new todo
    const handleAddTodo = async () => {
        try {
            const newTodoItem = await addTodo(todo, setTodo, setCount, setDisplayVisible, setShowPopup, setMessage, setStatus);
            if (newTodoItem) {
                setNewTodo(prevTodos => [newTodoItem, ...prevTodos]);
            }
        } catch (error) {
            console.error('Failed to add todo:', error);
        }
    };

    // Calculate pagination details
    const totalPages = Math.ceil(newTodo.length / tasksPerPage);
    const startIdx = (currentPage - 1) * tasksPerPage;

    // Handle error and loading states
    if (error) return renderErrorState();
    if (!data) return renderLoadingState();

    return (
            <div className='flex bg-white w-full h-screen relative dark:bg-blue font-poppins'>
                <div className="flex w-full flex-col items-center relative">
                    <div className="flex mt-10">
                        <label className="flex text-4xl font-bold items-center">
                            <IoMdRocket width={22} height={36} color="#839dd1" />
                            <span className="text-logoLight dark:text-logoDark">to</span>
                            <span className="text-lightBlue dark:text-lightPurple">do</span>
                        </label>
                    </div>
                    <div className="flex mt-[53px]">
                        <input
                            type="text"
                            id="newTodo"
                            onChange={(e) => setTodo(e.target.value)}
                            value={todo}
                            className='flex rounded-md bg-[#d3e2f2] text-[#414e6e] p-4 h-[54px] outline-none w-[655px] shadow-md shadow-shadow dark:bg-white dark:shadow-shadow dark:placeholder-gray dark:text-darkGray'
                            placeholder='Add a new task'
                        />
                        <Button
                            id="btnTodo"
                            onClick={handleAddTodo}
                            className='flex w-[70px] h-[52px] bg-lightPurple ml-2 mt-[1.5px] rounded-md items-center justify-center text-white text-[15px] gap-2 font-semibold outline-none dark:bg-lightBlue shadow-md shadow-shadow'>
                            Add
                        </Button>
                    </div>
                    <div className="flex relative w-[750px] h-[750px] flex-col items-center rounded-lg mt-6">
                        <div className="flex gap-[445px] mt-16">
                            <div className="flex gap-2">
                                <label className="flex text-lightPurple text-[14px] font-bold dark:text-white whitespace-nowrap">Tasks created</label>
                                <label className="flex bg-lightPurple text-white px-2 py-[2px] rounded-full text-[12px] font-bold dark:bg-lightBlue whitespace-nowrap">{count}</label>
                            </div>
                            <div className="flex gap-2">
                                <label className="flex text-lightPurple text-[14px] font-bold dark:text-[#f2f7fb] whitespace-nowrap">Completed</label>
                                <label className="flex bg-lightPurple text-white px-2 py-[2px] rounded-full text-[12px] font-bold dark:bg-lightBlue whitespace-nowrap">{markCount} out of {count}</label>
                            </div>
                        </div>
                        <div className="flex w-[740px] bg-blue h-0.5 mt-6 dark:bg-lightPurple"></div>
                        {newTodo.slice(startIdx, startIdx + tasksPerPage).map((todo) => (
                            <ul key={todo.id}
                                className={`flex relative w-[736px] h-[72px] mt-6 rounded-md p-3 text-[14px] ${todo.is_completed ? 'bg-completed' : 'bg-lightPurple'} text-white`}
                            >
                                <li className={`flex items-center w-full justify-between ${todo.is_locked && 'pointer-events-none'}`} onClick={() => markTodoDone(todo.id, newTodo, setNewTodo, setMarkCount)}>
                                    <div className="flex items-center">
                                        <label htmlFor="" className="flex ml-3">
                                            <span className={`${todo.is_completed ? 'line-through text-white' : 'text-white'}`}>
                                                {todo.task_description}
                                            </span>
                                            {todo.is_completed && <span className="ml-2 text-white bg-green-600 px-0.5 rounded absolute right-20">Completed</span>}
                                        </label>
                                    </div>
                                </li>
                                <button className="flex items-center relative" onClick={() => handleDeleteTodo(
                                    todo.id, newTodo, setNewTodo, setCount, setMarkCount, setDisplayVisible, setShowPopup, setMessage, setStatus)}><CgTrash size={24} /></button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleIsUnlocked(todo.id, newTodo, setNewTodo);
                                    }}
                                    className="absolute top-[26.5px] right-12"
                                >
                                    {!todo.is_locked ? <FaUnlock size={18} /> : <FaLock size={18} />}
                                </button>
                            </ul>
                        ))}
                        {displayVisible && (
                            <div className="flex flex-col items-center">
                                <div className="flex mt-16">{darkMode ? <TiDocumentText size={56} color="#f2f7fb" /> : <TiDocumentText size={56} color="#262c40" />}</div>
                                <div className="flex text-lightBlue dark:text-white">You don't have any tasks registered yet.</div>
                                <div className="flex text-lightBlue dark:text-white">Create tasks and organize your to-do items.</div>
                            </div>
                        )}
                        {totalPages > 0 && (
                            <div className="flex absolute bottom-0 justify-center mt-4 text-lightBlue dark:text-white text-[14px] font-bold">
                                <Pagination
                                    total={totalPages}
                                    initialPage={currentPage}
                                    page={currentPage}
                                    onChange={(page) => setCurrentPage(page)}
                                    color="default"
                                    size="md"
                                    showControls
                                />
                            </div>
                        )}
                    </div>
                    {showPopup &&
                        <div className="flex text-white absolute bottom-10 right-10 bg-lightPurple h-16 rounded-lg p-4 items-center">
                            {message}
                            <div className="absolute flex h-4 w-4 bottom-[55px] right-[-5px]">
                                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightPurple opacity-75"></div>
                                <div className={`inline-flex rounded-full h-4 w-4 ${status === 'success' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                            </div>
                        </div>}
                </div>
            </div>
    )
}

export default TodoList;
