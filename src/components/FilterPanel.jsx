import React from 'react';

const FilterPanel = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <label>
        Приоритет:
        <select name="priority" onChange={handleFilterChange}>
          <option value="">Все</option>
          <option value="Низкий">Низкий</option>
          <option value="Средний">Средний</option>
          <option value="Высокий">Высокий</option>
        </select>
      </label>
      <label>
        Проект:
        <input type="text" name="project" onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default FilterPanel;
