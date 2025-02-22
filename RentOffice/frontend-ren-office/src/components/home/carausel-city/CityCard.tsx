import React from "react";
import { baseURL, City } from "../../../types/Type";

interface CityCardProps {
    city: City,
}
const CityCard: React.FC<CityCardProps> = ({city}) => {
    return (
        <a href="" className="card">
            <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
                <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
                    <h3 className="font-bold text-xl leading-[30px] text-white">{city.name}</h3>
                    <p className="text-white">{city.officeSpaces_count} Offices</p>
                </div>
                <img src={`${baseURL}/${city.photo}`} alt={city.name} className="absolute w-full h-full object-cover"/>
            </div>
        </a>
    );
}

export default CityCard;