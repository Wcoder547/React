import { createContext, useContext } from "react";

const todoContext = createContext({
  todos: [
    {
      id: 1,
      content: "hello msg",
      completed: false,
    },
  ],
  // Placeholder functions for the context. They are expected to be replaced by actual implementations.
  addTodo: () => {},
  updateTodo: () => {},
  removeTodo: () => {},
  toggleComplete: () => {},
});

const useTodo = () => {
  return useContext(todoContext);
};

const TodoProvider = todoContext.Provider;

export { todoContext, useTodo, TodoProvider };
