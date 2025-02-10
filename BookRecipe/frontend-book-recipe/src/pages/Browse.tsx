import 'swiper/swiper-bundle.css';
import Navbar from "../components/home/Navbar";
import SearchForm from "../components/home/SearchForm";
import CategoryFilter from "../components/home/CategoryFilter";
import RecipeSlide from "../components/home/RecipeSlide";
import ButtomNav from "../components/home/ButtomNav";

export default function Browse() {
    return (
       <>
            <Navbar />
            <SearchForm />
            <CategoryFilter />
            <RecipeSlide />
            <ButtomNav />
       </>

    );
}