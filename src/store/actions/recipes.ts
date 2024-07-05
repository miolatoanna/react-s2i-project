import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Recipe} from "../types/recipes";

const apiKey = '0a89dfd8a9914d2f9d6a1bac4ffa4f6a';

/**
 * API to get recipes list with vegetarian parameter
 */
export const getRecipesList = createAsyncThunk<Recipe[]>('recipes/getRecipesList',async () => {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian`);
    return response.data.results;
});

