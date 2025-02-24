import { Office } from "../../types/Type";
import OfficeCard from "./office-card/OfficeCard";

interface ListOfficesProps {
    offices?: Office[] | null;
}

const ListOffices: React.FC<ListOfficesProps> = ({offices}) => {

    if (!offices || offices.length === 0) {
        return <p className="text-center text-gray-500">No offices available.</p>;
    }
    return (
        <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
                    Browse Our Fresh Space.<br/>For Your Better Productivity.
            </h2>

            <div className="grid grid-cols-3 gap-[30px]">
                {offices?.map((office, index) => (
                    <OfficeCard key={index} office={office} />
                ))}
            </div>
        </section>
    );
}

export default ListOffices; 