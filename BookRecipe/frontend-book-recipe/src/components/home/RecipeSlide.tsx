import { Swiper, SwiperSlide } from "swiper/react";

const RecipeSlide = () => {
    return (
        <section id="MadeByPeople">
            <div className="flex items-center justify-between px-5">
                <h2 className="font-bold">Made by People</h2>
                <a href="#" className="font-semibold text-sm leading-[21px] text-[#FF4C1C]">Explore All</a>
            </div>
            <div className="swiper w-full mt-3">
                <Swiper 
                        className="w-full mt-3" direction="horizontal" spaceBetween={16} slidesPerView="auto" slidesOffsetBefore={20} slidesOffsetAfter={20}
                    
                >
                    <SwiperSlide className="!w-fit">
                        <a href="details.html" className="card">
                            <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                                <img src="/assets/images/thumbnails/thumbnail-1.png" className="absolute w-full h-full object-cover" alt="thumbnails" />
                                <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                                <div className="relative flex flex-col h-full justify-between p-5 z-20">
                                    <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                                        <span className="font-semibold text-xs leading-[18px] text-white">4.5</span>
                                    </div>
                                    <div className="flex flex-col gap-[6px]">
                                        <h3 className="font-bold text-xl leading-[28px] text-white">Orange Cake Masterpieces</h3>
                                        <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">Sweet</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="!w-fit">
                        <a href="details.html" className="card">
                            <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                                <img src="/assets/images/thumbnails/thumbnail-2.png" className="absolute w-full h-full object-cover" alt="thumbnails" />
                                <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                                <div className="relative flex flex-col h-full justify-between p-5 z-20">
                                    <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                                        <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                                    </div>
                                    <div className="flex flex-col gap-[6px]">
                                        <h3 className="font-bold text-xl leading-[28px] text-white">Burger Tebal Makin Hot</h3>
                                        <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">Bakery</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="!w-fit">
                        <a href="details.html" className="card">
                            <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                                <img src="/assets/images/thumbnails/thumbnail-3.png" className="absolute w-full h-full object-cover" alt="thumbnails" />
                                <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                                <div className="relative flex flex-col h-full justify-between p-5 z-20">
                                    <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                        <span className="font-semibold text-xs leading-[18px] text-white">4.3</span>
                                    </div>
                                    <div className="flex flex-col gap-[6px]">
                                        <h3 className="font-bold text-xl leading-[28px] text-white">French Toast Blueberries</h3>
                                        <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">by Masa</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default RecipeSlide;