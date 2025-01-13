import React from 'react';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  return (
    <li>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Приоритет: {todo.priority}</p>
      <p>Дата: {new Date(todo.date).toLocaleString()}</p>
      <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
      <button onClick={() => editTodo(todo.id, { ...todo, title: 'Новое название' })}>
        Редактировать
      </button>
    </li>
  );
};

export default TodoItem;
