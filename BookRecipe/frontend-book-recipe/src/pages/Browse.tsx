import 'swiper/swiper-bundle.css';
import Navbar from "../components/Navbar";
import SearchForm from "../components/home/SearchForm";
import ButtomNav from "../components/home/ButtomNav";
import CategoryFilter from '../components/home/categoriFilter/CategoryFilter';
import RecipeSlide from '../components/RecipesSlide';

export default function Browse() {
    return (
       <>
            <Navbar showNotification={true} />
            <SearchForm />
            <CategoryFilter />
            <RecipeSlide />
            <ButtomNav />
       </>

    );
}