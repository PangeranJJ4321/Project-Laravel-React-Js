const About = () => {
    return (
        <section id="Description" className="flex flex-col gap-4 px-5 mt-[30px]">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold">About</h2>
                <p className="leading-8">Burger tebal asal kota inkopad ini sangat membuat lapar dan sehat untuk tubuh kita terutama ketika sedang bulking pada masa otot terbaru setelah olahraga.</p>
            </div>
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="avatar" />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <p className="font-semibold">Shayna</p>
                        <p className="text-sm leading-[21px] text-[#848486]">Author</p>
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
        </section>
    );

}

export default About;