import { useEffect, useState } from "react";
import BenefitsContent from "../components/home/BenefitsContent";
import CarauselCity from "../components/home/CarauselCity";
import HeroBanner from "../components/home/HeroBanner";
import ListOffices from "../components/home/ListOffices";
import NavBar from "../components/home/NavBar";
import { City } from "../types/Type";
import axios from "axios";


const Browse = () => {

    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        axios.get("http://127.0.0.1:8000/api/cities" , {
            headers: {
                "API-KEY" : "1a2b3c4d5e6f7g8h9i0j",
            }
        })
        .then((response) => {
            setCities(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
        
    }, []);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error loading data : {error}</p>

    return (
        <>
            <NavBar />

            <HeroBanner />

            <CarauselCity cities={cities}/>

            <BenefitsContent />

            <ListOffices />
             
        </>
    );
}

export default Browse;