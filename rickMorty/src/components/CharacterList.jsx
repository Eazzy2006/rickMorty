import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from "./queries/queries.jsx";    
import CharacterCard from './CharacterCard';
import Filters from './Filters';
import Pagination from './Pagination';

const CharacterList = ({ language, labels }) => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [sortOption, setSortOption] = useState('');

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page, status: statusFilter, species: speciesFilter },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  let characters = data.characters.results;

  // Sorting logic
  if (sortOption === 'name') {
    characters = characters.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === 'origin') {
    characters = characters.sort((a, b) => a.origin.name.localeCompare(b.origin.name));
  }

  return (
    <div>
      <Filters
        setStatusFilter={setStatusFilter}
        setSpeciesFilter={setSpeciesFilter}
        setSortOption={setSortOption}
      />

      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} labels={labels} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} info={data.characters.info} />
    </div>
  );
};

export default CharacterList;
