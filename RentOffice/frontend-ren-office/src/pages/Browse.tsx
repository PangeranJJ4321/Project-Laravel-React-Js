import { useEffect, useState } from "react";
import BenefitsContent from "../components/home/BenefitsContent";
import CarauselCity from "../components/home/CarauselCity";
import HeroBanner from "../components/home/HeroBanner";
import ListOffices from "../components/home/ListOffices";
import NavBar from "../components/home/NavBar";
import { City, Office } from "../types/Type";
import axios from "axios";
import Loading from "../components/Loading";


const Browse = () => {

    const [cities, setCities] = useState<City[]>([]);
    const [offices, setOffices]  = useState<Office[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        const fetchCities = axios.get("http://127.0.0.1:8000/api/cities" , {
            headers: {
                "API-KEY" : "1a2b3c4d5e6f7g8h9i0j",
            }
        });

        const fetchOffices = axios.get("http://127.0.0.1:8000/api/offices", {
            headers: {
                "API-KEY" : "1a2b3c4d5e6f7g8h9i0j",
            }
        })

        Promise.all([fetchCities, fetchOffices])
            .then(([citiesRes, officesRes]) => {
                setCities(citiesRes.data.data);
                setOffices(officesRes.data.data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally( () => {
                setLoading(false);
            })

        
    }, []);


    // console.log(cities);
    // if(offices && cities) {
    //     console.log(cities)
    //     console.log(offices)
    //     return;
    // };


    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen text-red-500">
                <p>Error loading data: {error}</p>
            </div>
        );
    }


    return (
        <>
            {loading ? (
                <Loading title="Memuat"/>
            ) : (
                <>
                    <NavBar />
                    <HeroBanner />
                    <CarauselCity cities={cities} />
                    <BenefitsContent />
                    <ListOffices offices={offices} />
                </>
            )}
        </>
    );
    
}

export default Browse;