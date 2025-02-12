import { useParams } from "react-router-dom";
import Header from "../components/category-details/Header";
import ButtomNav from "../components/home/ButtomNav";
import RecipeSlide from "../components/RecipesSlide";
import { useEffect, useState } from "react";
import { Category } from "../types/Type";
import axios from "axios";
import RecipeList from "../components/ListRecipes";
import Navbar from "../components/Navbar";


const CategoryDetails = () => {
    const {slug} =  useParams< {slug?: string} >();
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/category/${slug}`)
        .then((response) => {
            setCategory(response.data.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        });
    }, [slug]);

    return (
        <>
            <Navbar title="Category" showBackButton={true} showMoreButton={true} />
            <Header category={category} loading={loading} error={error} />
            <RecipeSlide slug={slug} />
            <RecipeList title="Latest Recipes" recipes={category?.recipes} loading={loading} error={error} />
            <ButtomNav />
        </>
    );
}

export default CategoryDetails;