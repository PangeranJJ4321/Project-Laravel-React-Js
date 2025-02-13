import { baseURL, Recipe } from "../../types/Type";

interface AboutProps {
    recipe: Recipe | null;
}

const About: React.FC<AboutProps> = ({ recipe }) => {
    return (
        <section id="Description" className="flex flex-col gap-4 px-5 mt-[30px]">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold">About</h2>
                <p className="leading-8">{recipe?.about || "Tidak ada deskripsi tersedia."}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden">
                        <img 
                            src={`${baseURL}/${recipe?.author.photo}`} 
                            className="w-full h-full object-cover" 
                            alt="avatar" 
                        />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                        <p className="font-semibold">{recipe?.author.name || "Unknown"}</p>
                        <p className="text-sm leading-[21px] text-[#848486]">Author</p>
                    </div>
                </div>
                <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                        <img
                            key={index}
                            src={index < (4) ? "/assets/images/icons/Star 1.svg" : "/assets/images/icons/Star-grey.svg"}
                            className="w-[18px] h-[18px]"
                            alt="star"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
