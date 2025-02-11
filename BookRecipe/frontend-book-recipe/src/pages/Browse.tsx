import 'swiper/swiper-bundle.css';
import Navbar from "../components/home/Navbar";
import SearchForm from "../components/home/SearchForm";
import RecipeSlide from "../components/home/RecipeSlide/RecipeSlide";
import ButtomNav from "../components/home/ButtomNav";
import CategoryFilter from '../components/home/categoriFilter/CategoryFilter';

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