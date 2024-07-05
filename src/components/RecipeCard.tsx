import { Recipe } from '../store/types/recipes';
import React from "react";

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="max-w-xs w-full bg-white text-center rounded-lg m-4 flex flex-col items-center p-4 transition-transform transform hover:scale-105">
            <img className="w-full h-48 object-cover mb-4" src={recipe.image} alt={recipe.title} />
            <div className="flex flex-col flex-grow justify-between">
                <div className="mb-4">
                    <div className="text-xl text-lime-700 font-bold mb-4">{recipe.title}</div>
                </div>
                <div>
                    <button className="btn success">Scopri di più</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
