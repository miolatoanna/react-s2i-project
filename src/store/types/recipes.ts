export interface Recipe {
    id: number;
    title: string;
    image: string;
}

export interface InfoRecipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
    servings: number;
    readyInMinutes: number;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    healthScore: number;
    spoonacularScore: number;
    pricePerServing: number;
    analyzedInstructions: any[];
    cheap: boolean;
    creditsText: string;
    cuisines: any[];
    dairyFree: boolean;
    diets: any[];
    gaps: string;
    glutenFree: boolean;
    instructions: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: any[];
    sustainable: boolean;
    vegan: boolean;
    vegetarian: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: number;
    dishTypes: string[];
    extendedIngredients: ExtendedIngredient[];
    summary: string;
}

export interface ExtendedIngredient {
    aisle: string;
    amount: number;
    consitency: string;
    id: number;
    image: string;
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
}