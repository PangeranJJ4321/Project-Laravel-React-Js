

interface ButtonDetailProps {
    title: string;
    onClick: () => void;
    src: string;
}

const ButtonDetail: React.FC<ButtonDetailProps> = ({ title, onClick, src }) => {
    return (
        
        <button 
            onClick={onClick} 
            className="flex items-center gap-[10px] py-3 px-4 rounded-full font-semibold !text-white bg-black transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:!bg-[#FF4C1C]" 
            id="ingredients-tab" 
            data-tabs-target="#ingredients" 
            type="button" 
            role="tab" 
            aria-controls="ingredients"
        >
            <img src={src} className="w-[22px] h-[22px]" alt={`Icon for ${title}`} />
            <h3>{title}</h3>
        </button>
    );
};

export default ButtonDetail;
