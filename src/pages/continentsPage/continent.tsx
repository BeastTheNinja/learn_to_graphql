import { useParams, Link } from "react-router";
import { useState } from "react";
import { useFetchCountries } from "../../hook/useFetchData";
import { CountriesGraphQL } from "../../queries/CountriesGraphQL";
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import { CountryCard } from "../../component/CountryCard";
import { CountryModal } from "../../component/CountryModal";
import { SearchBar } from "../../component/SearchBar";
import type { Country } from "../../types/country";

export const ContinentPage = () => {
    const { code } = useParams<{ code: string }>();
    const { data, loading, error } = useFetchCountries(CountriesGraphQL);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const continentNames: { [key: string]: string } = {
        AF: "Africa",
        AN: "Antarctica",
        AS: "Asia",
        EU: "Europe",
        NA: "North America",
        OC: "Oceania",
        SA: "South America",
    };

    const continentName = continentNames[code || ""] || "Continent";

    // Filter countries by continent
    const countriesByContinent = data?.countries.filter(
        (country) => country.continent.name === continentName
    ) || [];

    // Further filter by search query
    const filteredCountries = countriesByContinent.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCardClick = (country: Country) => {
        setSelectedCountry(country);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null);
    };

    return (
        <>
            <Header title={`${continentName}`} />
            <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex gap-4 mb-8">
                        <Link
                            to="/"
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
                        >
                            ← Back to Home
                        </Link>
                        <Link
                            to="/continents"
                            className="inline-block bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
                        >
                            ← Back to Continents
                        </Link>
                    </div>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex flex-col items-center justify-center py-24">
                            <div className="animate-spin mb-4">
                                <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full"></div>
                            </div>
                            <p className="text-xl text-gray-600 font-semibold">Loading countries...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && (
                        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 max-w-md mx-auto">
                            <p className="text-red-700 font-semibold text-lg">Error loading data</p>
                            <p className="text-red-600 mt-2">{error.message}</p>
                        </div>
                    )}

                    {/* Countries List */}
                    {data && !loading && (
                        <>
                            {/* Search Bar */}
                            <SearchBar onSearch={setSearchQuery} />

                            {/* Results Info */}
                            <div className="mb-8 mt-8">
                                <p className="text-gray-600 text-center">
                                    {searchQuery ? (
                                        <>
                                            Found <span className="font-bold text-blue-600">{filteredCountries.length}</span> of{' '}
                                            <span className="font-bold text-blue-600">{countriesByContinent.length}</span> countries
                                        </>
                                    ) : (
                                        <>
                                            <span className="font-bold text-blue-600">{countriesByContinent.length}</span> countries in {continentName}
                                        </>
                                    )}
                                </p>
                            </div>

                            {/* No Results */}
                            {filteredCountries.length === 0 && searchQuery && (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">No countries found matching "{searchQuery}"</p>
                                </div>
                            )}

                            {/* Countries Grid */}
                            {filteredCountries.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredCountries.map((country) => (
                                        <CountryCard
                                            key={country.name}
                                            country={country}
                                            onCardClick={handleCardClick}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <CountryModal
                country={selectedCountry}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
            <Footer />
        </>
    );
};