import { Link } from "react-router-dom";

interface NavbarProps {
    title?: string;
    showBackButton?: boolean;
    showNotification?: boolean;
    showMoreButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ title, showBackButton, showNotification, showMoreButton }) => {
    const navClass = showBackButton 
        ? "absolute top-0 flex w-full max-w-[640px] items-center justify-between px-5 mt-[30px] z-20" 
        : "flex items-center justify-between px-5 mt-[30px]";
    
    return (
        <nav className={navClass}>
            {showBackButton ? (
                <Link to="/">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                        <img src="/assets/images/icons/arrow-left.svg" className="w-5 h-5 object-contain" alt="back" />
                    </div>
                </Link>
            ) : (
                <Link to="/" className="flex shrink-0">
                    <img src="/assets/images/logos/logo.svg" alt="logo" />
                </Link>
            )}

            {title && <h1 className="font-semibold text-white">{title}</h1>}

            {showNotification ? (
                <a href="#">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_10px_20px_0_#D6D6D6AB] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                        <img src="/assets/images/icons/notification.svg" className="w-5 h-5 object-contain" alt="notification" />
                    </div>
                </a>
            ) : showMoreButton ? (
                <button className="appearance-none">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                        <img src="/assets/images/icons/more.svg" className="w-5 h-5 object-contain" alt="more" />
                    </div>
                </button>
            ) : (
                <div className="w-10 h-10"></div>
            )}
        </nav>
    );
};

export default Navbar;