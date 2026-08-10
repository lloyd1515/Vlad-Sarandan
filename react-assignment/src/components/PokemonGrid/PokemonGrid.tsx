    import React from 'react';
    import type { Pokemon } from '../../types/pokemon';
    import { PokemonCard } from '../PokemonCard/PokemonCard';
  
    // 1. Ce date primește grila de la părintele App.tsx
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
          {/* Generează câte un PokemonCard pentru fiecare Pokemon */}
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
