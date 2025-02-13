const DownloadRecipe = () => {
    return (
        <div id="BottomNav" className="fixed z-50 bottom-0 w-full max-w-[640px] mx-auto border-t border-[#E7E7E7] py-4 px-5 bg-white/70 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <img src="/assets/images/icons/note-favorite-fill-black.svg" className="w-8 h-8" alt="icon" />
                    <p>Offline-access is available now</p>
                </div>
                <button className="py-3 px-5 rounded-full font-semibold text-white text-nowrap transition-all duration-300 shadow-[0_10px_20px_0_#FF4C1C80] bg-[#FF4C1C]">
                    Download Now
                </button>
            </div>
        </div>
    );
}

export default DownloadRecipe;