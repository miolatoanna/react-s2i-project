import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {InfoRecipe, Recipe} from "../types/recipes";

const apiKey = import.meta.env.VITE_API_KEY;

/**
 * API to get recipes list with vegetarian parameter
 */
export const getRecipesList = createAsyncThunk<Recipe[]>('recipes/getRecipesList',async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
            apiKey: apiKey,
            diet: 'vegetarian'
        }
    });
    return response.data.results;
});

/**
 * API to get info about a single recipe with id parameter
 */
export const getInfoRecipe = createAsyncThunk<InfoRecipe, string>('recipes/getInfoRecipe', async (id) => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
        params: {
            apiKey: apiKey,
            includeNutrition: false,
        }
    });
    return response.data;
});

/**
 * API to search recipes based on query
 */
export const getSearchRecipe = createAsyncThunk<Recipe[], string>('recipes/searchRecipes', async (query) => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
            apiKey: apiKey,
            diet: 'vegetarian',
            query: query
        }
    });
    return response.data.results;
});