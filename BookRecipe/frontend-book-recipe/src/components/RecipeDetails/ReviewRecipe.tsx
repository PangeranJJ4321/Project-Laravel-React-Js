import { Recipe } from "../../types/Type";

interface ReviewRecipeProps {
    recipe: Recipe | null; 
}

const ReviewRecipe: React.FC<ReviewRecipeProps> = ({recipe}) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="review-card flex flex-col pb-5 border-b border-[#E7E7E7] gap-3">
                <p className="leading-8">Hemat uang jadinya gaperlu beli burger di luar, udah bisa masak sendiri hehehe</p>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src="/assets/images/photos/photo-2.png" className="w-full h-full object-cover" alt="avatar" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-semibold">Shayna</p>
                            <p className="text-sm leading-[21px] text-[#848486]">12 Days Ago</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                    </div>
                </div>
            </div>
            <div className="review-card flex flex-col pb-5 border-b border-[#E7E7E7] gap-3">
                <p className="leading-8">Recipe paling enak menurut gue karena anak gak pernah bosan makan ini terus setiap harinya, thank you banget ya shay...</p>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="avatar" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-semibold">ShSarina Dwinaayna</p>
                            <p className="text-sm leading-[21px] text-[#848486]">12 Days Ago</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star"/>
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star"/>
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star"/>
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star"/>
                        <img src="/assets/images/icons/Star-grey.svg" className="w-[18px] h-[18px]" alt="star"/>
                    </div>
                </div>
            </div>
            <div className="review-card flex flex-col pb-5 border-b border-[#E7E7E7] gap-3">
                <p className="leading-8">Hemat uang jadinya gaperlu beli burger di luar, udah bisa masak sendiri hehehe</p>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                            <img src="/assets/images/photos/photo-4.png" className="w-full h-full object-cover" alt="avatar" />
                        </div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="font-semibold">Alqowy Putri</p>
                            <p className="text-sm leading-[21px] text-[#848486]">12 Days Ago</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                        <img src="/assets/images/icons/Star 1.svg" className="w-[18px] h-[18px]" alt="star" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewRecipe;