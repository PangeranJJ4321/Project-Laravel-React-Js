import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../components/RecipeDetails/About";
import DownloadRecipe from "../components/RecipeDetails/DownloadRecipe";
import Header from "../components/RecipeDetails/Header";
import ListDetails from "../components/RecipeDetails/ListDetails";
import { useEffect, useState } from "react";
import { Recipe } from "../types/Type";
import axios from "axios";

const RecipeDetails = () => {

    const {slug} = useParams< {slug: string} >();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState<string | null>(null);

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/recipe/${slug}`)
        .then((response) => {
            setRecipe(response.data.data);
            setLoading(false);
        })
        .catch ((error) => {
            seterror(error.message);
            setLoading(!loading);
        });
    }, [slug]);

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