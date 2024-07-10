import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png'
import {useState} from "react";
import {useAppDispatch} from "../../store";
import {getSearchRecipe} from "../../store/actions/recipes";

export function NavBar() {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        dispatch(getSearchRecipe(event.target.value));
    };

    return (
        <div className="fixed z-10 top-0 left-0 right-0 ">
            <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-20 bg-white/30 backdrop-blur-lg text-lime-700 p-3 shadow-lg rounded-lg">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <img src={logo} alt="Logo" className="mt-4 w-28"/>
                    <NavLink to="shop" className='text-xl font-bold'>We ❤️ Vegetarians</NavLink>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full md:w-auto"
                        type="text"
                        placeholder="Search recipes..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
        </div>
    )
}