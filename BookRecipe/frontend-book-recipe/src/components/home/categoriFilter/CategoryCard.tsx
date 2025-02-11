import { Link } from "react-router-dom";
import { baseURL, Category } from "../../../types/Type";

const CategoryCard = ({ category }: { category: Category }) => {
   
   return (
      <a  className="card"> 
            <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
               <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
                  <img src={`${baseURL}/${category.icon}`} className="object-cover w-full h-full object-top" alt={category.name} />
               </div>
               <h3 className="font-semibold text-sm leading-[21px]">{category.name}</h3>
            </div>
      </a>
   );
};

export default CategoryCard;
