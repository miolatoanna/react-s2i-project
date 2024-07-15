import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from "../store";
import {getRecipesList} from "../store/actions/recipes";
import RecipeCard from '../components/RecipeCard';

export function RecipesPage() {
    const dispatch = useAppDispatch();
    const { recipes, searchResults, loading } = useAppSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(getRecipesList())
    }, [])

    const recipesToDisplay = searchResults.length > 0 ? searchResults : recipes;

    if (loading) {
        return <div style={{height: '100vh'}}>Loading...</div>
    }

    return (
        <div>
            <h1 className="title">Home</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                {recipesToDisplay && recipesToDisplay.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}