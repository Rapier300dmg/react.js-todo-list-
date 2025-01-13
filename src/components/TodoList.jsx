import React from 'react';

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p>Теги: {todo.tags.join(', ')}</p>
        <p>Приоритет: {todo.priority}</p>
        <p>Проект: {todo.project}</p>
        <p>Дата: {new Date(todo.date).toLocaleString()}</p>
        <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
