import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.length > 3) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div id="SearchForm" className="px-5 mt-[30px]">
            <div className="flex items-center rounded-full p-[5px_14px] pr-[5px] gap-[10px] bg-white shadow-[0_12px_30px_0_#D6D6D652] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#FF4C1C]">
                <img src="/assets/images/icons/note-favorite.svg" className="w-6 h-6" alt="icon" />
                <input type="text" name="search" id="search" value={searchQuery} onChange={handleInputChange} className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-black" placeholder="Find our best food recipes" />
                <button onClick={handleSearch} className=" flex shrink-0 w-[42px] h-[42px]">
                    <img src="/assets/images/icons/search.svg" alt="icon" />
                </button>
            </div>
        </div>
    );
}

export default SearchForm;