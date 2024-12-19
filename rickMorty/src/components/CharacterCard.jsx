import React from 'react';

const CharacterCard = ({ character, labels }) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <p>{labels.status}: {character.status}</p>
      <p>{labels.species}: {character.species}</p>
      <p>{labels.gender}: {character.gender}</p>
      <p>{labels.origin}: {character.origin.name}</p>
    </div>
  );
};

export default CharacterCard;
