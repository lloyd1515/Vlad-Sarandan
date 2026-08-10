    import React from 'react';                                                                                   
    import type { CapturedFilter } from '../../types/pokemon';
  
    // 1. Ce date primește filtrul de la părinte
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
        <div className="filters-container">
          {/* Dropdown 1: Filtru după Tip (Fire, Water, Grass...) */}
          <div className="filter-group">
            <label>Type</label>
            <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
              <option value="Any">Any</option>
              {types.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
  
          {/* Dropdown 2: Filtru după Status Capturat */}
          <div className="filter-group">
            <label>Captured</label>
            <select
              value={selectedCaptured}
              onChange={(e) => onCapturedChange(e.target.value as CapturedFilter)}
            >
              <option value="Any">Any</option>
              <option value="Captured">Captured</option>
              <option value="Not Captured">Not Captured</option>
            </select>
          </div>
        </div>
      );
    };
