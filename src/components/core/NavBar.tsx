import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import heart from '../../assets/heart.svg'
import heartFill from '../../assets/heart-fill.svg'
import {useState} from "react";

export function NavBar() {

    const [addFavourite, setAddFavourite] = useState(false);

    return (
        <div className="fixed z-10 top-0 left-0 right-0 ">
            <div className="flex items-center justify-between h-20 bg-amber-50 text-lime-700 p-3 shadow-2xl">

                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="mt-4 w-28"/>
                    <NavLink to="shop" className='text-xl font-bold'>We ❤️ Vegetarians</NavLink>
                </div>

                {/* Favourite Button*/}
                <div className='mr-8'>
                    <button onClick={() => {
                        setAddFavourite(!addFavourite)
                    }}>
                        {!addFavourite && <img src={heart} alt="Favourite" className="w-11"/>}
                        {addFavourite && <img src={heartFill} alt="Favourite" className="w-12"/>}
                    </button>
                </div>

            </div>
        </div>
    )
}