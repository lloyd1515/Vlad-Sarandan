export interface Pokemon {
      id: number;
      num: string;
      name: string;
      img: string;
      type: string[];
      height: string;
      weight: string;
      weaknesses: string[];
    }
  
    export interface PokemonData {
      pokemon: Pokemon[];
    }
  
    export type CapturedFilter = 'Any' | 'Captured' | 'Not Captured';
