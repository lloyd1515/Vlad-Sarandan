import React from 'react';
import type { Pokemon } from '../../types/pokemon';
import { PokemonCard } from '../PokemonCard/PokemonCard';

interface PokemonGridProps {
  pokemonList: Pokemon[];
  capturedIds: Set<number>;
  onToggleCaptured: (id: number) => void;
}

export const PokemonGrid: React.FC<PokemonGridProps> = ({
  pokemonList,
  capturedIds,
  onToggleCaptured,
}) => {
  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isCaptured={capturedIds.has(pokemon.id)}
          onToggleCaptured={onToggleCaptured}
        />
      ))}
    </div>
  );
};
