import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "./carausel-city/CityCard";
import { City } from "../../types/Type";

interface CarauselCityProps {
    cities: City[] | null; // Mengubah `City` menjadi array `City[]`
}

const CarauselCity: React.FC<CarauselCityProps> = ({ cities }) => {
    if (!cities || cities.length === 0) return null; // Cek jika `cities` kosong atau null

    return (
        <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
            <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    You Can Choose <br /> Our Favorite Cities
                </h2>
                <a href="#" className="rounded-full py-3 px-5 bg-white font-bold">
                    Explore All City
                </a>
            </div>
            
            {/* Swiper tanpa div tambahan */}
            <Swiper
                direction="horizontal"
                spaceBetween={20}
                slidesPerView="auto"
                slidesOffsetAfter={20}
                slidesOffsetBefore={20}
            >
                {cities.map((city, index) => (
                    <SwiperSlide key={index} className="!w-fit">
                        <CityCard city={city} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CarauselCity;
