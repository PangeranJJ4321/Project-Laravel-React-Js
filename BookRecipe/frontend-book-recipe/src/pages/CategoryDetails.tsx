import Header from "../components/category-details/Header";
import ButtomNav from "../components/home/ButtomNav";
import Navbar from "../components/home/Navbar";

const CategoryDetails = () => {
    return (
        <>
            <Navbar />
            <Header />
            <section id="MadeByPeople" className="mt-[30px]">
                <div className="flex items-center justify-between px-5">
                    <h2 className="font-bold">Made by People</h2>
                </div>
                <div className="swiper w-full mt-3">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide !w-fit">
                            <a href="details.html" className="card">
                                <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnail-1.png" className="absolute w-full h-full object-cover" alt="thumbnails"/>
                                    <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                                    <div className="relative flex flex-col h-full justify-between p-5 z-20">
                                        <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                                            <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                            <span className="font-semibold text-xs leading-[18px] text-white">4.5</span>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <h3 className="font-bold text-xl leading-[28px] text-white">Orange Cake Masterpieces</h3>
                                            <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">Sweet</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide !w-fit">
                            <a href="details.html" className="card">
                                <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnail-2.png" className="absolute w-full h-full object-cover" alt="thumbnails"/>
                                    <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                                    <div className="relative flex flex-col h-full justify-between p-5 z-20">
                                        <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                                            <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                            <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <h3 className="font-bold text-xl leading-[28px] text-white">Burger Tebal Makin Hot</h3>
                                            <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">Bakery</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-slide !w-fit">
                            <a href="details.html" className="card">
                                <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
                                    <img src="/assets/images/thumbnails/thumbnail-3.png" className="absolute w-full h-full object-cover" alt="thumbnails"/>
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
                        </div>
                    </div>
                </div>
            </section>

            <section id="LatestRecipes" className="px-5 mt-[30px]">
                <div className="flex items-center justify-between">
                    <h2 className="font-bold">Latest Recipes</h2>
                </div>
                <div className="flex flex-col gap-[18px] mt-[18px]">
                    <a href="details.html" className="card">
                        <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                                <img src="/assets/images/thumbnails/thumbnail-3.png" className="w-full h-full object-cover" alt="thumbnail"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-lg leading-[24px]">Burger Tebal Makin Hot</h3>
                                    <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                        <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                                    </div>
                                </div>
                                <p className="text-sm leading-[21px] text-[#848486]">by Shayna Alqowy</p>
                            </div>
                        </div>
                    </a>
                    <a href="details.html" className="card">
                        <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                                <img src="/assets/images/thumbnails/thumbnail-2.png" className="w-full h-full object-cover" alt="thumbnail"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-lg leading-[24px]">Burger Tebal Makin Hot</h3>
                                    <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                        <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                                    </div>
                                </div>
                                <p className="text-sm leading-[21px] text-[#848486]">by Shayna Alqowy</p>
                            </div>
                        </div>
                    </a>
                    <a href="details.html" className="card">
                        <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                                <img src="/assets/images/thumbnails/thumbnail-1.png" className="w-full h-full object-cover" alt="thumbnail"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-lg leading-[24px]">Burger Tebal Makin Hot</h3>
                                    <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                        <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                                    </div>
                                </div>
                                <p className="text-sm leading-[21px] text-[#848486]">by Shayna Alqowy</p>
                            </div>
                        </div>
                    </a>
                    <a href="details.html" className="card">
                        <div className="flex rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D640] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                            <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                                <img src="/assets/images/thumbnails/thumbnail-2.png" className="w-full h-full object-cover" alt="thumbnail"/>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-bold text-lg leading-[24px]">Burger Tebal Makin Hot</h3>
                                    <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-[#FF4C1C] shadow-[0_6px_10px_0_#FF4C1C80]">
                                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star"/>
                                        <span className="font-semibold text-xs leading-[18px] text-white">4.8</span>
                                    </div>
                                </div>
                                <p className="text-sm leading-[21px] text-[#848486]">by Shayna Alqowy</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            <ButtomNav />
        </>
    );
}

export default CategoryDetails;