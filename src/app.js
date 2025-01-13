import React, { useState } from 'react';
import TodoList from './components/TodoList';
import FilterPanel from './components/FilterPanel';
import TodoFormModal from './components/TodoFormModal';

function App() {
  const [todos, setTodos] = useState([]);
  const [filters, setFilters] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filters.priority && todo.priority !== filters.priority) return false;
    if (filters.project && todo.project !== filters.project) return false;
    return true;
  });

  return (
    <div className="container">
      <h1>Список дел</h1>
      <button onClick={() => setModalOpen(true)}>Добавить дело</button>
      <FilterPanel setFilters={setFilters} />
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo} />
      <TodoFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} addTodo={addTodo} />
    </div>
  );
}

export default App;
