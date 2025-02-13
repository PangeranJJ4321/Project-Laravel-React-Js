import Navbar from "../components/Navbar";
import About from "../components/RecipeDetails/About";
import DownloadRecipe from "../components/RecipeDetails/DownloadRecipe";
import Header from "../components/RecipeDetails/Header";
import ListDetails from "../components/RecipeDetails/ListDetails";

const RecipeDetails = () => {
    return (
        <>
            <Navbar title="" showBackButton={true} showMoreButton={true} />
            <Header />
            <About />
            <ListDetails />
            <DownloadRecipe />

        </>
    );
}

export default RecipeDetails;