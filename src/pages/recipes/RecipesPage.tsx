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

            <div className="flex flex-wrap justify-center">
                {recipes && recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}