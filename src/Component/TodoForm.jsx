import React, { useState } from "react";
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    


      if (!value) return;
       addTodo(value);
      setValue("");
    
  };
  if(handleSubmit == true){
    alert("Task added successfully")
  }
  return (
    <>
      <div className="container mx-auto ">
        <h4 className="text-2xl text-center text-white pt-9">TO DO APP</h4>
        <div className="md:w-2/5 w-4/5 bg-slate-600 p-10 container rounded-lg mx-auto py-10">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full h-12 px-2 rounded-lg focus:outline-0"
              value={value}
              placeholder="Add a new todo"
              onChange={(e) => {
                setValue(e.target.value);
             
              }}
            />
            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="bg-slate-300 w-24 h-10 rounded-lg hover:bg-slate-400 "
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
