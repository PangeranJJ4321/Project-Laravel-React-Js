import { useEffect, useState } from "react";
import HeaderCityDetail from "../components/citydetails/HeaderCityDetail";
import NavBar from "../components/home/NavBar";
import { City } from "../types/Type";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import OfficeCard from "../components/home/office-card/OfficeCard";



const CityDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const [city, setCity] = useState<City | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/city/${slug}`, {
            headers: {
                "API-KEY": "0j9i8h7g6f5e4d3c2b1a",
            },
        })
        .then((response) => {
            setCity(response.data.data);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [slug]);

    console.log(city)

    if (loading) return <Loading title="Memuat" />;

    if (error) return <p>Error loading: {error}</p>;

    // if (city?.officeSpaces_count === null) return <p>City not found</p>;

    return (
        <>
            <NavBar />
            <HeaderCityDetail city={city} />
            <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">Browse Offices</h2>
                <div className="grid grid-cols-3 gap-[30px]">
                    {city?.officeSpaces? (
                        city?.officeSpaces?.map((office, index) => (
                            <OfficeCard key={index} office={office} />
                        ))
                    ) : (
                         <p style={{ fontWeight: "bold", color: "red" }}>No offices available</p>
                    )}
                </div>
            </section>
        </>
    );
};

export default CityDetails;
