import React from 'react';
import type { Pokemon } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
  isCaptured: boolean;
  onToggleCaptured: (id: number) => void;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  isCaptured,
  onToggleCaptured,
}) => {
  const displayTypes = pokemon.type.join(', ');

  return (
    <div className="pokemon-card">
      <span className="pokemon-id">{pokemon.id}</span>
      <img src={pokemon.img} alt={pokemon.name} className="pokemon-img" />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <p className="pokemon-types">{displayTypes}</p>

      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isCaptured}
          onChange={() => onToggleCaptured(pokemon.id)}
        />
        <span className="slider round"></span>
        <span className="toggle-text">Captured</span>
      </label>
    </div>
  );
};
