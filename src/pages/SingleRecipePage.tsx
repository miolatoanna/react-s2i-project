import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store";
import React, {useEffect} from "react";
import {getInfoRecipe} from "../store/actions/recipes";
import nope from "../assets/nope.svg"
import yeah from "../assets/yeah.svg"

export const SingleRecipePage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const {infoRecipe} = useAppSelector((state) => state.recipes);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(getInfoRecipe(id));
        }
    }, [id, dispatch]);

    function goBack() {
        navigate('recipes')
    }

    return (
        <>
            {infoRecipe && <div className="flex flex-col items-center pt-10 gap-10">
                <div className="m-auto">
                    <img className="w-full h-auto rounded-lg shadow-lg" src={infoRecipe.image} alt={infoRecipe.title}/>
                </div>
                <div className="text-lime-700">
                    <h1 className="text-4xl font-bold mt-6 mb-12">{infoRecipe.title}</h1>
                    <h4 className="text-l font-medium" dangerouslySetInnerHTML={{__html: infoRecipe.summary}}/>
                    <div className="flex flex-col justify-around mt-12 md:flex-row md:space-y-0 md:space-x-4">
                        <p className="flex items-center">Vegan <img src={infoRecipe.vegan ? yeah : nope}
                                                                    alt="Vegan status" className="w-11"/></p>
                        <p className="flex items-center">Dairy Free <img src={infoRecipe.dairyFree ? yeah : nope}
                                                                         alt="Dairy Free status" className="w-11"/></p>
                        <p className="flex items-center">Gluten Free <img src={infoRecipe.glutenFree ? yeah : nope}
                                                                          alt="Gluten Free status" className="w-11"/>
                        </p>
                    </div>
                </div>
            </div>}
            <div className="mt-20 pb-20 text-white">
                <button className="btn primary lg" onClick={goBack}>Go back</button>
            </div>
        </>
    )
}