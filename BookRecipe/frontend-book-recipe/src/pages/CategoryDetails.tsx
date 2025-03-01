import { useParams } from "react-router-dom";
import Header from "../components/category-details/Header";
import RecipeSlide from "../components/RecipesSlide";
import { useEffect, useState } from "react";
import { Category } from "../types/Type";
import axios from "axios";
import RecipeList from "../components/RecipeList";
import Navbar from "../components/Navbar";
import BottomNav from "../components/home/BottomNav";


const CategoryDetails = () => {
    const {slug} =  useParams< {slug?: string} >();
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/category/${slug}`, {
            headers : {
                'dapurpangeran' : '28c6082ca87fa002c35c46c4a97ff9ff'
            }
        })
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
            {/* <BottomNav /> */}
        </>
    );
}

export default CategoryDetails;