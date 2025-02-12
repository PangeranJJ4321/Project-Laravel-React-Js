import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../../../types/Type";
import CategoryCard from "./CategoryCard";


const CategoryFilter = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String | null>(null);


    useEffect( () => {
        axios.get('http://127.0.0.1:8000/api/categories')
        .then(response => {
            setCategories(response.data.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    });

    // console.log(categories);

    // if (loading) {
    //     return <p className="flex items-center justify-between px-5">Loading ...</p>
    // }

    // if (error) {
    //     return <p>Error loading data : {error}</p>
    // }
    
    return (
        <section id="Categories" className="mt-[30px]">
            {!loading && 
                <div className="flex items-center justify-between px-5">
                    <h2 className="font-bold">By Categories</h2>
                </div>
            }
            <div className="swiper w-full mt-3">
                {/* nanti setelah membuat componen home, kita buat Swiper jadi componenn baru */}
                <Swiper 
                    className="w-full mt-3" direction="horizontal" spaceBetween={16} slidesPerView="auto" slidesOffsetBefore={20} slidesOffsetAfter={20}
                
                >   
                    {categories.map( (category) => (
                        <SwiperSlide key={category.id} className="!w-fit pb-[30px]">
                            <CategoryCard category={category}/>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
        </section>
    );
}

export default CategoryFilter;