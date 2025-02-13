import { useState } from "react";
import ButtonDetail from "./ButtonDetail";
import { Swiper, SwiperSlide } from "swiper/react";

const ListDetails = () => {
    const [activeTab, SetActiveTab] = useState<string>('Ingredients');

    const handleTabClick = (tab: string) => {
        SetActiveTab(tab);
    };

    return (
        <section id="Details" className="mt-[30px]">
            <div className="flex items-center justify-between px-5">
                <h2 className="font-bold">Details</h2>
            </div>

            <div className="swiper-tabs w-full overflow-hidden mt-3">
                <div className="swiper-wrapper" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist" data-tabs-active-classNamees="shadow-[0_10px_20px_0_#FF4C1C80] !bg-[#FF4C1C]" data-tabs-inactive-classNamees="!bg-black">
                    <Swiper
                        className="w-full mt-3"
                        direction="horizontal"
                        spaceBetween={16}
                        slidesPerView="auto"
                        slidesOffsetBefore={20}
                        slidesOffsetAfter={20}
                    >   
                        <SwiperSlide className="!w-fit pb-[26px]">
                            <ButtonDetail title="Ingredients" onClick={() => handleTabClick('Ingredients')} src="/assets/images/icons/coffee-white.svg" />
                        </SwiperSlide>
                        <SwiperSlide className="!w-fit pb-[26px]">
                            <ButtonDetail title="Tutorials" onClick={() => handleTabClick('Tutorials')} src="/assets/images/icons/note-favorite-white.svg"  />
                        </SwiperSlide>
                        <SwiperSlide className="!w-fit pb-[26px]">
                            <ButtonDetail title="Reviews" onClick={() => handleTabClick('Reviews')} src="/assets/images/icons/star-white.svg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div id="default-tab-content">
                {activeTab === 'Ingredients' && 
                (
                    <div className="px-5" id="ingredients" role="tabpanel" aria-labelledby="ingredients-tab">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="flex flex-col items-center text-center w-full rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D680]">
                                <div className="thumbnail flex shrink-0 w-full aspect-[138.5/100] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnails-ingredients-1.png" className="w-full h-full object-cover" alt="thumbnails" />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <p className="font-semibold">Big Meats</p>
                                    <p className="text-sm leading-[21px] text-[#848486]">1 kilogram</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center w-full rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D680]">
                                <div className="thumbnail flex shrink-0 w-full aspect-[138.5/100] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnails-ingredients-2.png" className="w-full h-full object-cover" alt="thumbnails" />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <p className="font-semibold">Pineapple</p>
                                    <p className="text-sm leading-[21px] text-[#848486]">3 pcs</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center w-full rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D680]">
                                <div className="thumbnail flex shrink-0 w-full aspect-[138.5/100] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnails-ingredients-3.png" className="w-full h-full object-cover" alt="thumbnails" />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <p className="font-semibold">Flour Milk</p>
                                    <p className="text-sm leading-[21px] text-[#848486]">50 ons</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center w-full rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D680]">
                                <div className="thumbnail flex shrink-0 w-full aspect-[138.5/100] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnails-ingredients-4.png" className="w-full h-full object-cover" alt="thumbnails" />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <p className="font-semibold">Pure Eggs</p>
                                    <p className="text-sm leading-[21px] text-[#848486]">10 pcs</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center w-full rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D680]">
                                <div className="thumbnail flex shrink-0 w-full aspect-[138.5/100] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnails-ingredients-5.png" className="w-full h-full object-cover" alt="thumbnails" />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <p className="font-semibold">Angga’s Spices</p>
                                    <p className="text-sm leading-[21px] text-[#848486]">1 kilogram</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center w-full rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D680]">
                                <div className="thumbnail flex shrink-0 w-full aspect-[138.5/100] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnails-ingredients-6.png" className="w-full h-full object-cover" alt="thumbnails" />
                                </div>
                                <div className="flex flex-col gap-[2px]">
                                    <p className="font-semibold">Super Chilly</p>
                                    <p className="text-sm leading-[21px] text-[#848486]">3 pcs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab ==='Tutorials' && 
                (
                    <div className="px-5" id="tutorials" role="tabpanel" aria-labelledby="tutorials-tab">
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
                            <div className="list flex gap-[14px]">
                                <div className="flex relative">
                                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                                        <span>4</span>
                                    </div>
                                    <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]"></div>
                                </div>
                                <p className="leading-8 pb-[30px]">Grill daging sapi dengan keadaan frozen dan berikan sea salts</p>
                            </div>
                            <div className="list flex gap-[14px]">
                                <div className="flex relative">
                                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_12px_30px_0_#D6D6D680] font-bold text-sm leading-[21px]">
                                        <span>5</span>
                                    </div>
                                    <div className="line absolute left-1/2 transform -translate-x-1/2 h-full border-dashed border border-[#DEDFEB]"></div>
                                </div>
                                <p className="leading-8 pb-[30px]">Gabungkan satu per satu ketika masih panas jadi lebih melekat</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Reviews' && 
                (
                    <div className="px-5" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
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
                    </div>
                )}

                </div>
        </section>
    );
}

export default ListDetails;