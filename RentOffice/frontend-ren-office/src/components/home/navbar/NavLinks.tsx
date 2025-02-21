const NavLinks = () => {
    const links = [
        { name: "Browse", href: "#" },
        { name: "Popular", href: "#" },
        { name: "Categories", href: "#" },
        { name: "Events", href: "#" },
        { name: "My Booking", href: "#" },
    ];
    
    return (
        <ul className="flex items-center gap-[50px] w-fit">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href}>{link.name}</a>
                </li>
            ))}
        </ul>
    );
}

export default NavLinks;