export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-5 mt-[30px]">
            <a href="index.html" className="flex shrink-0">
                <img src="/assets/images/logos/logo.svg" alt="logo" />
            </a>
            <a href="#">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-[0_10px_20px_0_#D6D6D6AB] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80]">
                    <img src="/assets//images/icons/notification.svg" className="w-5 h-5 object-contain" alt="icon" />
                </div>
            </a>
        </nav>
    );
}