import BenefitsContent from "../components/home/BenefitsContent";
import CarauselCity from "../components/home/CarauselCity";
import HeroBanner from "../components/home/HeroBanner";
import ListOffices from "../components/home/ListOffices";
import NavBar from "../components/home/NavBar";

const Browse = () => {
    return (
        <>
            <NavBar />

            <HeroBanner />

            <CarauselCity />

            <BenefitsContent />

            <ListOffices />
             
        </>
    );
}

export default Browse;