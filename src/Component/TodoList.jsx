import React from "react";
import Todo from "./Todo";
const TodoList = ({todos,removeTodo,editTodo,toggleComplete}) => {
    return ( 
        <>
            <div className="h-2/5 overflow-y-scroll list">
             {/* Task */}
             <p className="text-white text-center mt-4 text-2xl font-bold">Tasks</p>
                {todos.map((todo,index) =>(
                    <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} editTodo={editTodo} toggleComplete={toggleComplete}/>
                ))}
            </div>
        </>
     );
}
 
export default TodoList;