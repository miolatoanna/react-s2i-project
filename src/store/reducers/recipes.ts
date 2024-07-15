import {createReducer} from '@reduxjs/toolkit';
import {getInfoRecipe, getRecipesList, getSearchRecipe} from '../actions/recipes';
import {InfoRecipe, Recipe} from '../types/recipes';


type RecipesState = {
    recipes: Recipe[]
    infoRecipe: InfoRecipe | null;
    searchResults: Recipe[];
    loading: boolean
}

const initialState: RecipesState = {
    recipes: [],
    infoRecipe: null,
    searchResults: [],
    loading: false
};

export default createReducer(initialState, (builder) => {

    builder.addCase(getRecipesList.pending, (state) => {
        state.loading = true
    })
    builder.addCase(getRecipesList.fulfilled, (state, action) => {
        state.loading = false
        state.recipes = action.payload
    })
    builder.addCase(getRecipesList.rejected, (state) => {
        state.loading = false
    })


    builder.addCase(getInfoRecipe.pending, (state) => {
        state.loading = true
    })
    builder.addCase(getInfoRecipe.fulfilled, (state, action) => {
        state.loading = false
        state.infoRecipe = action.payload
    })
    builder.addCase(getInfoRecipe.rejected, (state) => {
        state.loading = false
    })


    builder.addCase(getSearchRecipe.pending, (state) => {
        state.loading = true
    });
    builder.addCase(getSearchRecipe.fulfilled, (state, action) => {
        state.loading = false
        state.searchResults = action.payload;
    });
    builder.addCase(getSearchRecipe.rejected, (state) => {
        state.loading = false
    });
})




