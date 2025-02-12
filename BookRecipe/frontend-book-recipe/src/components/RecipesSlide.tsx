import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Category, Recipe } from "../types/Type";
import RecipeCard from "./home/RecipeSlide/RecipeCard";
import Loading from "./Loading";

interface RecipeSlideProps {
    slug?: string; 
}

const RecipeSlide = ({ slug }: RecipeSlideProps) => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        const endpoint = slug 
            ? `http://127.0.0.1:8000/api/category/${slug}` 
            : `http://127.0.0.1:8000/api/recipes`;

        axios.get(endpoint)
            .then(response => {
                if (slug) {
                    // Jika slug ada, ambil data dari kategori
                    const category: Category = response.data.data;
                    setRecipes(category.recipes || []);
                } else {
                    // Jika slug tidak ada, ambil semua resep
                    setRecipes(response.data.data);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });

    }, [slug]);


    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <section id="MadeByPeople" className="mt-[30px]">
             {loading ? (
                <Loading />
            ) : (
                <div className="flex items-center justify-between px-5">
                    <h2 className="font-bold">By Categories</h2>
                </div>
            )
            }

            

            <div className="swiper w-full mt-3">
                <Swiper
                    className="w-full mt-3"
                    direction="horizontal"
                    spaceBetween={16}
                    slidesPerView="auto"
                    slidesOffsetBefore={20}
                    slidesOffsetAfter={20}
                >
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <SwiperSlide key={recipe.id} className="!w-fit">
                                <RecipeCard recipe={recipe} />
                            </SwiperSlide>
                        ))
                    ) : !loading? (
                        <div className="flex items-center justify-center h-full">
                            <h4 className="font-bold">No Recipe found</h4>
                        </div>
                    ) : (
                        <p className="text-center font-bold">Memuat recipes...</p>
                    )
                }
                </Swiper>
            </div>
        </section>
    );
}

export default RecipeSlide;
