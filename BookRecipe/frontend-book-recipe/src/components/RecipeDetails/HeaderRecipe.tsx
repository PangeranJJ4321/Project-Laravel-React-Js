import { Swiper, SwiperSlide } from "swiper/react";
import { baseURL, Recipe } from "../../types/Type";

interface HeaderRecipeProps {
    recipe: Recipe | null; 
}

const HeaderRecipe: React.FC<HeaderRecipeProps> = ({ recipe }) => {
    
    return (
        <header id="Gallery" className="relative w-full h-[520px] flex shrink-0 rounded-b-[40px] bg-black overflow-hidden">
            <Swiper className="w-full" direction="horizontal"slidesPerView="auto" slidesOffsetAfter={20}>
                <SwiperSlide>
                    <div className="relative w-full h-full flex shrink-0">
                        <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                        <img src={`${baseURL}/${recipe?.thumbnail}`} className="w-full h-full object-cover" alt={`thumbnail`} />
                    </div>
                </SwiperSlide>
                {recipe?.photos.map((photo,index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full flex shrink-0">
                            <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                            <img src={`${baseURL}/${photo.photo}`} className="w-full h-full object-cover" alt={`thumbnail-${index + 1}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-0 w-full flex flex-col gap-5 z-20">
                <div className="swiper-pagination !-top-5 *:!bg-white"></div>
                <div className="flex justify-between p-5 pb-[23px] gap-3">
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-semibold text-[#FF4C1C]">{recipe?.category.name}</p>
                        <h1 className="font-bold text-[34px] leading-[46px] text-white">{recipe?.name}</h1>
                    </div>
                    <div className="flex shrink-0 items-center w-fit h-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                        <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderRecipe;
