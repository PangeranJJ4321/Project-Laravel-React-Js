const SearchForm = () => {
    return (
        <div id="SearchForm" className="px-5 mt-[30px]">
            <form action="search.html" className="flex items-center rounded-full p-[5px_14px] pr-[5px] gap-[10px] bg-white shadow-[0_12px_30px_0_#D6D6D652] transition-all duration-300 focus-within:ring-1 focus-within:ring-[#FF4C1C]">
                <img src="/assets/images/icons/note-favorite.svg" className="w-6 h-6" alt="icon" />
                <input type="text" name="search" id="search" className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-black" placeholder="Find our best food recipes" />
                <button type="submit" className=" flex shrink-0 w-[42px] h-[42px]">
                    <img src="/assets/images/icons/search.svg" alt="icon" />
                </button>
            </form>
        </div>
    );
}

export default SearchForm;