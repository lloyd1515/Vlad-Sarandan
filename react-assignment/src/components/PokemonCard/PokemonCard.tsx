    import React from 'react';
    import type { Pokemon } from '../../types/pokemon'
  
    // 1. Describe the props (input data) this card expects from parent
    interface PokemonCardProps {
      pokemon: Pokemon;
      isCaptured: boolean;
      onToggleCaptured: (id: number) => void;
    }
  
    // 2. The PokemonCard component function
    export const PokemonCard: React.FC<PokemonCardProps> = ({
      pokemon,
      isCaptured,
      onToggleCaptured,
    }) => {
      return (
        <div className={`pokemon-card ${isCaptured ? 'captured' : ''}`}>
          <span className="pokemon-id">{pokemon.id}</span>
          <img src={pokemon.img} alt={pokemon.name} className="pokemon-img" />
          <h3 className="pokemon-name">{pokemon.name}</h3>
          <p className="pokemon-types">{pokemon.type.join(', ')}</p>
  
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={isCaptured}
              onChange={() => onToggleCaptured(pokemon.id)}
            />
            Captured
          </label>
        </div>
      );
    };
