import React, { JSX, useState } from "react";
import ButtonDetail from "./ButtonDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import IngredientRecipeCard from "./IngredientRecipeCard";
import TutorialRecipe from "./TutorialRecipe";
import ReviewRecipe from "./ReviewRecipe";
import { Recipe } from "../../types/Type";

interface ListDetailsProps {
    recipe: Recipe | null; 
}

const ListDetails: React.FC<ListDetailsProps> = ({ recipe }) => {
    const [activeTab, setActiveTab] = useState<string>('Ingredients');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const tabContents: Record<string, JSX.Element> = {
        Ingredients: recipe ? <IngredientRecipeCard recipe={recipe} /> : <p>No Ingredients Available</p>, 
        Tutorials: recipe? <TutorialRecipe recipe={recipe} /> : <p>No Tutorials Available</p>, 
        Reviews: recipe? <ReviewRecipe recipe={recipe} /> : <p>No Review Available</p>,
    };

    return (
        <section id="Details" className="mt-[30px]">
            <div className="flex items-center justify-between px-5">
                <h2 className="font-bold">Details</h2>
            </div>

            <div className="swiper-tabs w-full overflow-hidden mt-3">
                <div className="swiper-wrapper" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <Swiper
                        className="w-full mt-3"
                        direction="horizontal"
                        spaceBetween={16}
                        slidesPerView="auto"
                        slidesOffsetBefore={20}
                        slidesOffsetAfter={20}
                    >   
                        {Object.keys(tabContents).map((tab) => (
                            <SwiperSlide key={tab} className="!w-fit pb-[26px]">
                                <ButtonDetail title={tab} onClick={() => handleTabClick(tab)} src={`/assets/images/icons/${tab.toLowerCase()}-white.svg`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div id="default-tab-content">
                {tabContents[activeTab] && (
                    <div className="px-5" id={activeTab.toLowerCase()} role="tabpanel" aria-labelledby={`${activeTab.toLowerCase()}-tab`}>
                        {tabContents[activeTab]}
                    </div>
                )}
            </div>
        </section>
    );
}

export default ListDetails;
