import React from 'react';

const Filters = ({ setStatusFilter, setSpeciesFilter, setSortOption }) => {
  return (
    <div className="filters">
      <label>Status: </label>
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <label>Species: </label>
      <select onChange={(e) => setSpeciesFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <label>Sort by: </label>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="name">Name</option>
        <option value="origin">Origin</option>
      </select>
    </div>
  );
};

export default Filters;
