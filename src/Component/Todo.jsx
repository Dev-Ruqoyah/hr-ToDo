import React, { useState } from "react";
const Todo = ({todo,index,removeTodo,editTodo,toggleComplete}) => {
    const [isEditing, setIsEditing] = useState(false);
    const[newValue, setNewValue] = useState(todo.text);

    const handleEdit = () =>
        setIsEditing(true);
       
        
  
    const handleSave = () =>{
        editTodo(index,newValue);
        setIsEditing(false)
    }
    return ( 
        <>
            <div className="container md:w-2/5 bg-slate-400 flex justify-between mx-auto mt-6 p-3 items-center rounded-lg">
                   
          
                <div style={{textDecoration:todo.isCompleted ? "line-through" : ""}} className="flex items-center  ">
                    <div className="w-1/2">
                    {
                        isEditing? (
                            <input 
                            type="text"
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            />
                        ):(
                            <span className="text-xl">{todo.text}</span>
                        )
                    }
                    </div>
                   
                    <div className="btn flex items-center">
                    <button onClick={isEditing ? handleSave : handleEdit}>{isEditing?"Save" : "Edit"}</button>
                    <button onClick={() => {toggleComplete(index)}}>
                        {todo.isCompleted ? "Undo" : "Complete"}

                    </button>
                    <button className="bg-red-500 px-4 py-2 rounded-lg text-white" onClick={() =>{removeTodo(index)}}>Remove</button>
                    </div>
                    
                </div>
                
            </div>
        </>
     );
}
 
export default Todo;