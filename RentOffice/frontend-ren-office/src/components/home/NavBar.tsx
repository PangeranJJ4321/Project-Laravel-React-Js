import ContactButton from "./navbar/ContactButton";
import NavLinks from "./navbar/NavLinks";

const NavBar = () => {
    return (
        <nav className="bg-white">
            <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
                <a href="index.html">
                    <img src="/assets/images/logos/logo.svg" alt="logo"/>
                </a>
                <NavLinks />
                <ContactButton />
            </div>
        </nav>
    );
}

export default NavBar;