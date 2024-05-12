import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");

  function addTask() {
    if(newTasks.trim() !== ""){
        setTasks(prevTask => [...prevTask, newTasks]);
        setNewTasks("")
    }
  }

  function deleteTask(index) {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  }

  function handleInputChange(e) {
    setNewTasks(e.target.value);
  }

  function moveTaskUp (index) {
    if(index > 0){
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index - 1]] = 
        [updateTasks[index - 1], updateTasks[index]];
        setTasks(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1){
        const updateTasks = [...tasks];
        [updateTasks[index], updateTasks[index + 1]] = 
        [updateTasks[index + 1], updateTasks[index]]
        setTasks(updateTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="enter a task..."
          value={newTasks}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => 
        <li value={index}><span>{index + 1}. {task}</span>
        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
        <button className="move-btn" onClick={() => moveTaskUp(index)}>Up</button>
        <button className="move-btn" onClick={() => moveTaskDown(index)}>Down</button></li>)}
      </ol>
    </div>
  );
};

export default ToDoList;
