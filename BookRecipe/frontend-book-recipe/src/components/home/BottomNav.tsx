interface BottomNavItemProps {
    href: string;
    icon: string;
    label: string;
    active: boolean;
}

const BottomNavItem: React.FC<BottomNavItemProps> = ({ href, icon, label, active }) => {
    return (
        <a href={href} className={`nav-items ${active ? "font-semibold" : "text-gray-500"}`}>
            <div className="flex flex-col items-center text-center gap-[7px] text-sm leading-[21px]">
                <img src={`/assets/images/icons/${icon}`} className="w-6 h-6" alt={`${label} icon`} />
                <span>{label}</span>
            </div>
        </a>
    );
};

const BottomNav = () => {
    const navItems = [
        { href: "/", icon: "note-favorite-orange.svg", label: "Browse", active: true },
        { href: "#", icon: "crown-grey.svg", label: "Featured", active: false },
        { href: "#", icon: "receipt-item-grey.svg", label: "Pricing", active: false },
        { href: "#", icon: "setting-2-grey.svg", label: "Settings", active: false },
    ];

    return (
        <nav id="BottomNav" className="fixed z-50 bottom-0 w-full max-w-[640px] mx-auto border-t border-[#E7E7E7] py-4 px-5 bg-white/70 backdrop-blur">
            <div className="flex items-center justify-evenly">
                {navItems.map((item, index) => (
                    <BottomNavItem key={index} {...item} />
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;