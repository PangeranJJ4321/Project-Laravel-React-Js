import { baseURL, Recipe } from "../../types/Type";
import Loading from "../Loading";

interface SearchResultProps {
    searchResults: Recipe[];
    loading: boolean;
    error: string | null;
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResults, loading, error }) => {
    if (error) return <p>{error}</p>;

    return (
        <section id="SearchResult" className="px-5 mt-[30px]">

            {loading ? (
                <Loading />
            ) : searchResults.length > 0 ? (
                <div className="flex items-center justify-start">
                    <h2 className="font-bold">Search Results ({searchResults.length})</h2>
                </div>
            ) : null}


            <div className="flex flex-col gap-[18px] mt-[18px]">
                {searchResults.length > 0 && !loading ? (
                    searchResults.map((recipe) => (
                        <a key={recipe.id} href={`/recipe/${recipe.id}`} className="card">
                            <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                                    <img 
                                        src={`${baseURL}/${recipe.thumbnail}`} 
                                        className="object-cover w-full h-full object-top" 
                                        alt="Recipe Thumbnail"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-lg leading-[24px]">{recipe.name}</h3>
                                        <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                                            <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                            <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-[21px] text-[#848486]">By {recipe.author.name}</p>
                                </div>
                            </div>
                        </a>
                    ))
                ) : !loading ?
                    (
                        <div className="flex items-center justify-center h-full">
                            <h4 className="font-bold">No Recipe found</h4>
                        </div>
                    ) : null
                }
            </div>
        </section>
    );
}

export default SearchResult;
