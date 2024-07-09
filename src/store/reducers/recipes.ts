import {createReducer} from '@reduxjs/toolkit';
import {getInfoRecipe, getRecipesList} from '../actions/recipes';
import {InfoRecipe, Recipe} from '../types/recipes';


type RecipesState = {
    recipes: Recipe[]
    infoRecipe: InfoRecipe | null;
}

const initialState: RecipesState = {
    recipes: [],
    infoRecipe: null,
};

export default createReducer(initialState, (builder) => {
    builder.addCase(getRecipesList.fulfilled, (state, action) => {
        state.recipes = action.payload
    })

    builder.addCase(getInfoRecipe.fulfilled, (state, action) => {
        state.infoRecipe = action.payload
    })
})




