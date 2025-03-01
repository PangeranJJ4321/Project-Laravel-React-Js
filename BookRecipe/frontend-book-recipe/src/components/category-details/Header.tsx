import { baseURL, Category } from "../../types/Type";
import Loading from "../Loading";

interface HeaderProps {
    category: Category | null;
    loading: boolean;
    error: string | null;
}

const Header: React.FC<HeaderProps> = ({category, loading, error}) => {
    return (
        <header className="relative w-full h-fit flex flex-col shrink-0 rounded-b-[40px]">
            <div className="relative flex shrink-0 w-full h-[260px] rounded-b-[40px] bg-black overflow-hidden -mb-[45px]">
                <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180.17deg,rgba(0,0,0,0)42.98%,rgba(0,0,0,0.76)79.32%)] z-10 rotate-180"></div>
                <img 
                    src="/assets/images/thumbnails/category-background.png" 
                    className="w-full h-full object-cover" 
                    alt="thumbnail"/>
            </div>
            <div className="relative px-5 z-10">
                <div className="flex items-center justify-between w-full rounded-[20px] p-[10px_20px] gap-4 bg-white shadow-[0_12px_30px_0_#D6D6D640]">
                    {loading ? (
                        <>
                            <Loading />
                            <p className="text-center text-gray-500 text-bold">No data available</p>
                        </>
                    ) : error ? (
                        <p className="text-center text-red-500">Error: {error}</p>
                    ) : category ? (
                        <div className="flex items-center gap-[10px]">
                            <div className="w-[70px] h-[70px] overflow-hidden">
                                <img 
                                    src={`${baseURL}/${category.icon}`}
                                    className="w-full h-full object-cover" 
                                    alt={category.name}
                                />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="font-bold text-lg leading-[27px]">{category.name}</p>
                                <p className="text-sm leading-[21px] text-[#848486]">
                                    {category.recipe_count} Recipes
                                </p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 text-bold">No data available</p>
                    )}

                    
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white overflow-hidden shadow-[0_10px_20px_0_#D6D6D6AB]">
                        <img src="/assets/images/icons/heart-black.svg" alt="icon"/>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;