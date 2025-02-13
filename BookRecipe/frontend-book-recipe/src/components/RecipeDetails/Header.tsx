const Header = () => {
    return (
        <header id="Gallery" className="relative w-full h-[520px] flex shrink-0 rounded-b-[40px] bg-black overflow-hidden">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="relative w-full h-full flex shrink-0">
                            <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                            <img src="/assets/images/thumbnails/thumbnail-2.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="relative w-full h-full flex shrink-0">
                            <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                            <img src="/assets/images/thumbnails/thumbnail-1.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="relative w-full h-full flex shrink-0">
                            <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10"></div>
                            <img src="/assets/images/thumbnails/thumbnail-3.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full flex flex-col gap-5 z-20">
                <div className="swiper-pagination !-top-5 *:!bg-white"></div>
                <div className="flex justify-between p-5 pb-[23px] gap-3">
                    <div className="flex flex-col gap-[6px]">
                        <p className="font-semibold text-[#FF4C1C]">Top Bakery</p>
                        <h1 className="font-bold text-[34px] leading-[46px] text-white">Burger Tebal Makin Hot</h1>
                    </div>
                    <div className="flex shrink-0 items-center w-fit h-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
                        <img src="/assets/images/icons/Star 1.svg" className="w-4 h-4" alt="star" />
                        <span className="font-semibold text-xs leading-[18px] text-white">4.3</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;