import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import FilterPanel from './components/FilterPanel';
import SearchBar from './components/SearchBar';
import todosData from './data';

const App = () => {
  const [todos, setTodos] = useState(todosData);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div>
      <h1>Список дел</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <FilterPanel setFilters={setFilters} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        searchQuery={searchQuery}
        filters={filters}
      />
    </div>
  );
};

export default App;
