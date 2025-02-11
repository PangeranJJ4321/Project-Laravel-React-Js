import ButtomNav from "../components/home/ButtomNav";
import Navbar from "../components/home/Navbar";
import SearchForm from "../components/home/SearchForm";
import SearchResult from "../components/search/SearchResult";

const SearchDetails = () => {
    return (
        <>
            <Navbar />
            <SearchForm />
            <SearchResult />
            <ButtomNav />
        </>
    );
}

export default SearchDetails;