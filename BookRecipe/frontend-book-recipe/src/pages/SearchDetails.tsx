import { useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import ButtomNav from "../components/home/ButtomNav";
import Navbar from "../components/Navbar";
import SearchForm from "../components/home/SearchForm";
import { SearchContext } from "../context/SearchContext";
import RecipeList from "../components/ListRecipes";

const SearchDetails = () => {
    const { searchResults, loading, error, performSearch } = useContext(SearchContext);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    useEffect(() => {
        if (query) {
            performSearch(query);
        }
    }, [query]);

    return (
        <>
            <Navbar showNotification={true} />
            <SearchForm />
            <RecipeList title="Search Results" recipes={searchResults} loading={loading} error={error} />
            <ButtomNav />
        </>
    );
}

export default SearchDetails;
