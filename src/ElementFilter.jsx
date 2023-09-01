import React, { useState } from 'react';

const ElementFilter = () => {
  const elements = ['JavaScript', 'React', 'Python'];
  const [filter, setFilter] = useState('');

  const filteredElements = elements.filter(element =>
    element.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter elements"
        value={filter}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredElements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElementFilter;
