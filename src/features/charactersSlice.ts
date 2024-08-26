"use client";
import { Gender, Species, Status } from "@/types/status";
import { getCharacters } from "../api/characters";
import { Character } from "../types/Character";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CharactersState {
  characters: Character[];
  status: "idle" | "loading" | "failed";
}

const initialState: CharactersState = {
  characters: [],
  status: "idle",
};

interface Props {
  currPage: number;
  charactersSearch: string;
  characterStatus: Status;
  charactersGender: Gender;
  charactersSpecies: Species;
}

export const getCharactersAsync = createAsyncThunk(
  "characters/fetchCharacters",
  async ({
    currPage,
    charactersSearch,
    characterStatus,
    charactersGender,
    charactersSpecies,
  }: Props) => {
    const CharactersFromServer = await getCharacters(
      currPage,
      charactersSearch,
      characterStatus,
      charactersGender,
      charactersSpecies
    );

    return CharactersFromServer.results;
  }
);

export const CharactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharactersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharactersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.characters = action.payload;
      })
      .addCase(getCharactersAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = CharactersSlice.actions;
export default CharactersSlice.reducer;
