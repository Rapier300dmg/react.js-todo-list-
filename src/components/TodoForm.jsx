import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    priority: 'Низкий',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    });
    setFormData({ title: '', description: '', tags: '', priority: 'Низкий', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Название дела" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Описание" value={formData.description} onChange={handleChange}></textarea>
      <input type="text" name="tags" placeholder="Теги (через запятую)" value={formData.tags} onChange={handleChange} />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="Низкий">Низкий</option>
        <option value="Средний">Средний</option>
        <option value="Высокий">Высокий</option>
      </select>
      <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;

