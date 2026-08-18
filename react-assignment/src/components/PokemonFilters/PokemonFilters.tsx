import React from 'react';
import type { CapturedFilter } from '../../types/pokemon';

interface PokemonFiltersProps {
  types: string[];
  selectedType: string;
  selectedCaptured: CapturedFilter;
  onTypeChange: (type: string) => void;
  onCapturedChange: (filter: CapturedFilter) => void;
}

export const PokemonFilters: React.FC<PokemonFiltersProps> = ({
  types,
  selectedType,
  selectedCaptured,
  onTypeChange,
  onCapturedChange,
}) => {
  return (
    <div className="filters-bar">
      <div className="filter-wrapper">
        <fieldset className="filter-fieldset">
          <legend className="filter-legend">Type</legend>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="filter-select"
          >
            <option value="Any">Any</option>
            {types.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </fieldset>

        <fieldset className="filter-fieldset">
          <legend className="filter-legend">Captured</legend>
          <select
            value={selectedCaptured}
            onChange={(e) => onCapturedChange(e.target.value as CapturedFilter)}
            className="filter-select"
          >
            <option value="Any">Any</option>
            <option value="Captured">Captured</option>
            <option value="Not Captured">Not Captured</option>
          </select>
        </fieldset>
      </div>
    </div>
  );
};
