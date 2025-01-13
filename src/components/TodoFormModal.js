import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TodoFormModal = ({ isOpen, onClose, addTodo }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    priority: 'Низкий',
    date: '',
    project: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Добавить дело</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Название:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Описание:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
          Теги (через запятую):
          <input type="text" name="tags" value={formData.tags} onChange={handleChange} />
        </label>
        <label>
          Приоритет:
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="Низкий">Низкий</option>
            <option value="Средний">Средний</option>
            <option value="Высокий">Высокий</option>
          </select>
        </label>
        <label>
          Дата выполнения:
          <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <label>
          Проект:
          <input type="text" name="project" value={formData.project} onChange={handleChange} />
        </label>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onClose}>Закрыть</button>
      </form>
    </Modal>
  );
};

export default TodoFormModal;
