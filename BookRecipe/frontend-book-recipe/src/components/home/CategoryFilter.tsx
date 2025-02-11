import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../../types/Type";


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

    if (loading) {
        return <p>Loading ...</p>
    }

    if (error) {
        return <p>Error loading data : {error}</p>
    }
    
    return (
        <section id="Categories" className="mt-[30px]">
        <div className="flex items-center justify-between px-5">
            <h2 className="font-bold">By Categories</h2>
        </div>

        {loading && <p className="flex items-center">Loading...</p>}
        <div className="swiper w-full mt-3">
            <Swiper 
                className="w-full mt-3" direction="horizontal" spaceBetween={16} slidesPerView="auto" slidesOffsetBefore={20} slidesOffsetAfter={20}
            
            >
                <SwiperSlide className="!w-fit pb-[30px]">
                    <a href="category.html" className="card">
                        <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                                <img src="/assets/images/icons/bakery.png" className="object-cover w-full h-full object-top" alt="icon" />
                            </div>
                            <h3 className="font-semibold text-sm leading-[21px]">Bakery</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="!w-fit pb-[30px]">
                    <a href="category.html" className="card">
                        <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center transition-all duration-300 shadow-[0_10px_20px_0_#FF4C1C80] bg-[#FF4C1C] text-white">
                            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                                <img src="/assets/images/icons/healthy.png" className="object-contain w-full h-full" alt="icon" />
                            </div>
                            <h3 className="font-semibold text-sm leading-[21px]">Healthy</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="!w-fit pb-[30px]">
                    <a href="category.html" className="card">
                        <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                                <img src="/assets/images/icons/sweet.png" className="object-contain w-full h-full" alt="icon" />
                            </div>
                            <h3 className="font-semibold text-sm leading-[21px]">Sweet</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="!w-fit pb-[30px]">
                    <a href="category.html" className="card">
                        <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                                <img src="/assets/images/icons/steam.png" className="object-contain w-full h-full" alt="icon" />
                            </div>
                            <h3 className="font-semibold text-sm leading-[21px]">Steam</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="!w-fit pb-[30px]">
                    <a href="category.html" className="card">
                        <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                                <img src="/assets/images/icons/grill.png" className="object-contain w-full h-full" alt="icon" />
                            </div>
                            <h3 className="font-semibold text-sm leading-[21px]">Grill</h3>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide className="!w-fit pb-[30px]">
                    <a href="category.html" className="card">
                        <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
                            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                                <img src="/assets/images/icons/seafoods.png" className="object-contain w-full h-full" alt="icon" />
                            </div>
                            <h3 className="font-semibold text-sm leading-[21px]">Seafood</h3>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
    );
}

export default CategoryFilter;