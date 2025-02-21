import React from "react";

type BenefitItemProps = {
    icon : string,
    title : string,
    description : string,
};

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                <img src={icon} className="w-[34px] h-[34px]" alt="icon"/>
            </div>
            <div className="flex flex-col gap-[5px]">
                <p className="font-bold text-lg leading-[27px]">{title}</p>
                <p className="text-sm leading-[24px]">{description}</p>
            </div>
        </div>
    );
};

export default BenefitItem;