import { createSlice } from "@reduxjs/toolkit";
import { GameData } from '../../shared/types/index';

type GamesState = {
  min_cart_value: number;
  types: GameData[];
  activeGame: GameData;
  selectedNumbers: string[];
};

const initialState: GamesState = {
  min_cart_value: 0,
  types: [],
  activeGame: {
    id: 0,
    type: '',
    description: '',
    range: 0,
    price: 0,
    max_number: 0,
    color: '',
  },
  selectedNumbers: []
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    getGames(state, action) {
      state.min_cart_value = action.payload.min_cart_value;
      state.types = action.payload.types;
      state.activeGame = action.payload.types[0];
    },
    setActiveGame(state, action) {
      state.activeGame = action.payload.activeGame;
    },
    setSelectedNumbers(state, action) {
      state.selectedNumbers = action.payload.selectedNumbers;
    }
  },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice;