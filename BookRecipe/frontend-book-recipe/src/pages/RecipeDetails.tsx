import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/RecipeDetails/About";
import DownloadRecipe from "../components/RecipeDetails/DownloadRecipe";
import ListDetails from "../components/RecipeDetails/ListDetails";
import { useEffect, useState } from "react";
import { Recipe } from "../types/Type";
import axios from "axios";
import HeaderRecipe from "../components/RecipeDetails/HeaderRecipe";

const RecipeDetails = () => {

    const {slug} = useParams< {slug: string} >();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("Fetching recipe for slug:", slug);
        axios.get(`http://127.0.0.1:8000/api/recipe/${slug}`)
        .then((response) => {
            setRecipe(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching recipe:", error);
            setError(error.message);
            setLoading(false);
        });
    }, [slug]);
    

    if (!recipe) return <h2>recipe not found</h2>;

    return (
        <>
            <Navbar title="" showBackButton={true} showMoreButton={true} />
            <HeaderRecipe recipe={recipe} />
            <About recipe={recipe} />
            <ListDetails />
            <DownloadRecipe />

        </>
    );
}

export default RecipeDetails;