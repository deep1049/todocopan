import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { Box } from "@chakra-ui/react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState({ id: null, title: "" });

  const handleAddTodo = (text) => {
    const newItem = {
      id: Math.random() + Date.now() + text,
      title: text,
      status: false,
    };
    setTodos([...todos, newItem]);
  };
  const handleToggle = (id) => {
    const todoAfterUpdate = todos.map((todo) => {
      return todo.id === id ? { ...todo, status: !todo.status } : todo;
    });
    setTodos(todoAfterUpdate);
  };

  const handleDelete = (id) => {
    const todoafterDelete = todos.filter((todo) => todo.id !== id);
    setTodos(todoafterDelete);
  };

  const handleEdit = (id, newTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo({ id: null, title: "" }); // Reset the editing state
  };
  return (
    <Box>
      <AddTodo handleAddTodo={handleAddTodo} />
      <Box>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            editingTodo={editingTodo}
            setEditingTodo={setEditingTodo}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Todo;
