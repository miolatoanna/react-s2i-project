import {createReducer} from '@reduxjs/toolkit';
import { getRecipesList } from '../actions/recipes';
import { Recipe } from '../types/recipes';


type RecipesState = {
    recipes: Recipe[]
}

const initialState: RecipesState = {
    recipes: [],
};

export default createReducer(initialState, (builder) => {
    builder.addCase(getRecipesList.fulfilled, (state, actions) => {
        state.recipes = actions.payload
    })
})



