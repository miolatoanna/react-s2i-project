import {createReducer} from '@reduxjs/toolkit';
import {getInfoRecipe, getRecipesList, getSearchRecipe} from '../actions/recipes';
import {InfoRecipe, Recipe} from '../types/recipes';


type RecipesState = {
    recipes: Recipe[]
    infoRecipe: InfoRecipe | null;
    searchResults: Recipe[];
}

const initialState: RecipesState = {
    recipes: [],
    infoRecipe: null,
    searchResults: []
};

export default createReducer(initialState, (builder) => {
    builder.addCase(getRecipesList.fulfilled, (state, action) => {
        state.recipes = action.payload
    })

    builder.addCase(getInfoRecipe.fulfilled, (state, action) => {
        state.infoRecipe = action.payload
    })

    builder.addCase(getSearchRecipe.fulfilled, (state, action) => {
        state.searchResults = action.payload;
    });
})




