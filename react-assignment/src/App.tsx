import React, { useState, useEffect, useMemo } from 'react';
import type { Pokemon, PokemonData, CapturedFilter } from './types/pokemon';
import { Header } from './components/Header/Header';
import { PokemonFilters } from './components/PokemonFilters/PokemonFilters';
import { PokemonGrid } from './components/PokemonGrid/PokemonGrid';
import './App.css';

const LOCAL_STORAGE_KEY = 'captured_pokemon_ids';

export const App: React.FC = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>('Any');
  const [capturedFilter, setCapturedFilter] = useState<CapturedFilter>('Any');

  const [capturedIds, setCapturedIds] = useState<Set<number>>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return new Set<number>(parsed);
        }
      } catch (e) {
        console.error('Failed to parse localStorage:', e);
      }
    }
    return new Set<number>();
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Array.from(capturedIds)));
  }, [capturedIds]);

  useEffect(() => {
    fetch('/assets/og-pokemon.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data: PokemonData) => {
        if (Array.isArray(data?.pokemon)) {
          setAllPokemon(data.pokemon);
        }
      })
      .catch((err) => console.error('Error fetching pokemon:', err));
  }, []);

  const availableTypes = useMemo(() => {
    const typesSet = new Set<string>();
    allPokemon.forEach((p) => p.type.forEach((t) => typesSet.add(t)));
    return Array.from(typesSet).sort();
  }, [allPokemon]);

  const handleToggleCaptured = (id: number) => {
    setCapturedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredPokemon = useMemo(() => {
    return allPokemon.filter((pokemon) => {
      if (selectedType !== 'Any' && !pokemon.type.includes(selectedType)) {
        return false;
      }
      const isCaptured = capturedIds.has(pokemon.id);
      if (capturedFilter === 'Captured' && !isCaptured) return false;
      if (capturedFilter === 'Not Captured' && isCaptured) return false;

      return true;
    });
  }, [allPokemon, selectedType, capturedFilter, capturedIds]);

  return (
    <div className="app-container">
      <Header />
      <PokemonFilters
        types={availableTypes}
        selectedType={selectedType}
        selectedCaptured={capturedFilter}
        onTypeChange={setSelectedType}
        onCapturedChange={setCapturedFilter}
      />
      <PokemonGrid
        pokemonList={filteredPokemon}
        capturedIds={capturedIds}
        onToggleCaptured={handleToggleCaptured}
      />
    </div>
  );
};
