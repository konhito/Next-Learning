"use client";
import BackendUrl from "@/config";
import axios from "axios";
import { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]); 
  const [newTodo, setNewTodo] = useState(""); 

  useEffect(() => {
    async function GetAllTODO() {
      try {
        const response = await axios.get(`${BackendUrl}/api/v1/user/todo`);
        setTodo(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    GetAllTODO();
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!newTodo.trim()) return; 

    try {
      const response = await axios.post(`${BackendUrl}/api/user/todo`, {
        title: newTodo, 
      });
      setTodo([...todo, response.data]); 
      setNewTodo(""); 
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-screen bg-teal-300">
      <div className="bold text-3xl">TODO APPLICATION BY ~KONHIT0</div>
      <div>Enter your todo</div>
      <input
        type="text"
        placeholder="Go Gym"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border px-2 py-1"
      />
      <input
        type="submit"
        onClick={handleSubmit}
        className="border mt-2 px-3 py-1 bg-white cursor-pointer"
      />

      {todo.map((item: { id: number; title: string }) => (
        <li key={item.id} className="border-b py-1">
          {item.title}
        </li>
      ))}
    </div>  
  );
};

export default Todo;
