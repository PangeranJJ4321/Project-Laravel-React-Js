import { useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import ButtomNav from "../components/home/ButtomNav";
import Navbar from "../components/home/Navbar";
import SearchForm from "../components/home/SearchForm";
import SearchResult from "../components/search/SearchResult";
import { SearchContext } from "../context/SearchContext";

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
            <Navbar />
            <SearchForm />
            <SearchResult searchResults={searchResults} loading={loading} error={error} />
            <ButtomNav />
        </>
    );
}

export default SearchDetails;
