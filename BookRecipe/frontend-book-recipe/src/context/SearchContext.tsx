import { createContext, useState } from "react";
import { Recipe } from "../types/Type";
import axios from "axios";

interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchResults: Recipe[];
    loading: boolean;
    error: string | null;
    performSearch: (query: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
    searchQuery: "",
    setSearchQuery: () => {},
    searchResults: [],
    loading: false,
    error: null,
    performSearch: () => {},
});

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const performSearch = async (query: string) => {
        setLoading(true);
        setError(null);
    
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/recipes/search?query=${encodeURIComponent(query)}`);
            setSearchResults(response.data.data);
        } catch (error: any) {
            setError(axios.isAxiosError(error) ? error.response?.data?.message || 'Error searching for recipes' : 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, loading, error, performSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
