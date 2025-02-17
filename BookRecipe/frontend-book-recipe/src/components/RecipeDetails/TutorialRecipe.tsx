import React from "react";
import { Recipe } from "../../types/Type";

interface TutorialRecipeProps {
    recipe: Recipe | null; 
}

const TutorialRecipe: React.FC<TutorialRecipeProps> = ({recipe}) => {
    return (
        <>
            <iframe className="w-full aspect-video rounded-[20px] bg-[#D9D9D9]" src="https://www.youtube.com/embed/n1YeqIlbkxc" />
            <div className="list-items-container flex flex-col mt-[26px]">
                <div className="list flex gap-[14px]">
                    <div className="flex relative">
                        <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                            <span>1</span>
                        </div>
                        <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]"></div>
                    </div>
                    <p className="leading-8 pb-[30px]">Siapkan telur rebus dicampur dengan mentega rendah kalori</p>
                </div>

                <div className="list flex gap-[14px]">
                    <div className="flex relative">
                        <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                            <span>2</span>
                        </div>
                        <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]"></div>
                    </div>
                    <p className="leading-8 pb-[30px]">Panaskan minyak dengan api stabil agar tidak gosong nanti dagingnya</p>
                </div>
                            
                <div className="list flex gap-[14px]">
                    <div className="flex relative">
                        <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                            <span>3</span>
                        </div>
                        <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]"></div>
                    </div>
                    <p className="leading-8 pb-[30px]">Roti disajikan tanpa wijen agar rasanya tidak bertabrakan salada</p>
                </div>
            </div>                     
        </>
    );
}

export default TutorialRecipe;