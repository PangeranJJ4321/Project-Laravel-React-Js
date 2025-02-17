import { baseURL, Recipe } from "../../types/Type";

interface ReviewRecipeProps {
    recipe: Recipe | null; 
}

const ReviewRecipe: React.FC<ReviewRecipeProps> = ({ recipe }) => {
    return (

        // disini reviewnya aku buat sengaja kosong, karena belum kubuat didatabelnya
        <div className="flex flex-col gap-5">
            {recipe?.reviews?.length ? (
                recipe.reviews.map((review, index) => (
                    <div key={index} className="review-card flex flex-col pb-5 border-b border-[#E7E7E7] gap-3">
                        <p className="leading-8">{review.comment}</p>
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                                    <img 
                                        src={`${baseURL}/${recipe?.author.photo}`}  
                                        className="w-full h-full object-cover" 
                                        alt="avatar" 
                                    />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <p className="font-semibold">{recipe.author.name}</p>
                                    <p className="text-sm leading-[21px] text-[#848486]">12 Days Ago</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <img 
                                        key={i} 
                                        src={i < 5
                                            ? "/assets/images/icons/Star 1.svg" 
                                            : "/assets/images/icons/Star-grey.svg"} 
                                        className="w-[18px] h-[18px]" 
                                        alt="star" 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-center">Belum Ada Review Untuk Resep Ini😩</p>
            )}
        </div>
    );
}

export default ReviewRecipe;
