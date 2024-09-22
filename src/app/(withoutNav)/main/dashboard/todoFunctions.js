// src/app/main/todo/todoFunctions.js
import axios from 'axios';

export const addTodo = async (todo, setTodo, setCount, setDisplayVisible, setShowPopup, setMessage, setStatus) => {
    if (todo.trim() === '') {
        setStatus('error');
        setShowPopup(true);
        setMessage('Please input a task');
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
        return null;
    }
    
    try {
        const response = await axios.post('/api/todos', 
            { task_description: todo },
            { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
        );
        const newTodoItem = response.data;

        setTodo('');
        setCount(prev => prev + 1);
        setDisplayVisible(false);
        setStatus('success');
        setShowPopup(true);
        setMessage('Task added successfully');
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    
        return newTodoItem;
    } catch (error) {
        console.error('Failed to add todo:', error);
        setStatus('error');
        setShowPopup(true);
        setMessage('Failed to add task. Please try again.');
        return null;
    }
};

export const markTodoDone = async (markId, newTodo, setNewTodo, setMarkCount) => {
    const todoIndex = newTodo.findIndex(todo => todo.id === markId);
    if (todoIndex !== -1) {
        const todoToToggle = newTodo[todoIndex];
        const updatedTodos = [...newTodo];
        updatedTodos[todoIndex] = { 
            ...todoToToggle, 
            is_completed: !todoToToggle.is_completed 
        };
        setNewTodo(updatedTodos);
        setMarkCount(markCount => todoToToggle.is_completed ? markCount - 1 : markCount + 1);

        try {
            await axios.put(`/api/todos`, 
                { id: markId, is_completed: updatedTodos[todoIndex].is_completed },
                { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
            );
        } catch (error) {
            console.error('Failed to update todo status:', error);
        }
    }
};

export const toggleIsUnlocked = async (todoId, newTodo, setNewTodo) => {
    const todoIndex = newTodo.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        const todoToToggle = newTodo[todoIndex];
        const updatedTodos = [...newTodo];
        updatedTodos[todoIndex] = { 
            ...todoToToggle, 
            is_locked: !todoToToggle.is_locked 
        };
        setNewTodo(updatedTodos);

        try {
            await axios.put(`/api/todos`, 
                { id: todoId, is_locked: updatedTodos[todoIndex].is_locked },
                { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
            );
        } catch (error) {
            console.error('Failed to update todo lock status:', error);
        }
    }
};

export const handleDeleteTodo = async (id, newTodo, setNewTodo, setCount, setMarkCount, setDisplayVisible, setShowPopup, setMessage, setStatus) => {
    const todoToDelete = newTodo.find(todo => todo.id === id);
    if (todoToDelete.is_locked){
        setMessage('This task is locked and cannot be deleted.');
        setStatus('error');
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
        return;
    }
    if (todoToDelete && !todoToDelete.is_locked) {
        try {
            await axios.delete('/api/todos',
                { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }, data: { id } },
            );
            const updatedTodos = newTodo.filter(todo => todo.id !== id);
            setNewTodo(updatedTodos);
            setStatus('success');
            setCount(updatedTodos.length);
            setShowPopup(true);
                setMessage('Deleted task successfully');
                setTimeout(() => {
                    setShowPopup(false);
                }, 3000);

            if (todoToDelete.is_completed) {
                setMarkCount(markCount => markCount - 1);
            }
            if (updatedTodos.length === 0) {
                setDisplayVisible(true);
            }
            
        } catch (error) {
            
            setStatus('error');
            console.error('Failed to delete todo:', error);
        }
    }
};
