import { useFetchCountries } from "../../hook/useFetchData"
import { CountriesGraphQL } from "../../queries/CountriesGraphQL";

export const Home = () => {
    const { data, loading, error } = useFetchCountries(CountriesGraphQL);

    return (

        <>
            <div>
                <h1 className="text-2xl font-bold">Countries</h1>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.countries.map((country: {
                    name: string;
                    emoji: string;
                    currency: string;
                    phone: string;
                    continent: { name: string };
                }) => (
                    <div key={country.name} className="border p-4 rounded">
                        <h2 className="text-xl font-semibold">
                            {country.name}
                        </h2>
                        <p> {country.emoji}</p>

                        <p><strong>Currency:</strong>
                            {country.currency}
                        </p>
                        <p><strong>Phone:</strong>
                            {country.phone}
                        </p>
                        <p><strong>Continent:</strong>
                            {country.continent.name}
                        </p>
                    </div>
                ))}
            </div>

        </>
    )
}