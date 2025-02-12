import { Swiper, SwiperSlide } from "swiper/react";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Recipe } from "../../../types/Type";

const RecipeSlide = () => {
    const [recipes, setCategories] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String | null>(null);


    useEffect( () => {
        axios.get('http://127.0.0.1:8000/api/recipes')
        .then(response => {
            setCategories(response.data.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    });

    // console.log(recipe);

    // if (loading) {
    //     return <p className="flex items-center justify-between px-5">Loading ...</p>
    // }

    // if (error) {
    //     return <p>Error loading data : {error}</p>
    // }

    return (
        <section id="MadeByPeople">
            {!loading && 
                <div className="flex items-center justify-between px-5">
                    <h2 className="font-bold">Made by People</h2>
                    <a href="#" className="font-semibold text-sm leading-[21px] text-[#FF4C1C]">Explore All</a>
                </div>
            }


            <div className="swiper w-full mt-3">
                <Swiper 
                        className="w-full mt-3" direction="horizontal" spaceBetween={16} slidesPerView="auto" slidesOffsetBefore={20} slidesOffsetAfter={20}
                    
                >
                    {recipes.map((recipe) => (
                        <SwiperSlide key={recipe.id} className="!w-fit">
                            <RecipeCard recipe={recipe} />
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </section>
    );
}

export default RecipeSlide;