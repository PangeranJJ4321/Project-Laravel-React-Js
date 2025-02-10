const ButtomNav = () => {
    return (
        <div id="BottomNav" className="fixed z-50 bottom-0 w-full max-w-[640px] mx-auto border-t border-[#E7E7E7] py-4 px-5 bg-white/70 backdrop-blur">
            <div className="flex items-center justify-evenly ">
                <a href="#" className="nav-items">
                    <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px] font-semibold">
                        <img src="/assets/images/icons/note-favorite-orange.svg" className="w-6 h-6" alt="icon"/>
                        <span>Browse</span>
                    </div>
                </a>
                <a href="#" className="nav-items">
                    <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                        <img src="/assets/images/icons/crown-grey.svg" className="w-6 h-6" alt="icon" />
                        <span>Featured</span>
                    </div>
                </a>
                <a href="#" className="nav-items">
                    <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                        <img src="/assets/images/icons/receipt-item-grey.svg" className="w-6 h-6" alt="icon" />
                        <span>Pricing</span>
                    </div>
                </a>
                <a href="#" className="nav-items">
                    <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                        <img src="/assets/images/icons/setting-2-grey.svg" className="w-6 h-6" alt="icon" />
                        <span>Settings</span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default ButtomNav;