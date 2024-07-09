import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from "../../store";
import {getRecipesList} from "../../store/actions/recipes";
import RecipeCard from '../../components/RecipeCard';

export function RecipesPage() {
    const dispatch = useAppDispatch();
    const { recipes } = useAppSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(getRecipesList())
    }, [])

    return (
        <div>
            <h1 className="title">Home</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                {recipes && recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}