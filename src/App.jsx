import { React, useEffect, useState } from "react";
import TodoList from "./Component/TodoList";
import TodoForm from "./Component/TodoForm";

function App() {
  const [todos, setTodos] = useState(() => {
    const SavedTodos = localStorage.getItem("todos");
    return SavedTodos ? JSON.parse(SavedTodos) : [];
  });

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-full py-10 bg-black">
          <TodoForm addTodo={addTodo} />
          <TodoList 
          todos={todos} 
          removeTodo={removeTodo} 
          editTodo={editTodo}
          toggleComplete={toggleComplete}
           />
        </div>
      </div>
    </>
  );
}

export default App;
