import { Header } from "../../component/header";
import { useFetchCountries } from "../../hook/useFetchData"
import { CountriesGraphQL } from "../../queries/CountriesGraphQL";
import { useState } from "react";
import { CountryCard } from "../../component/CountryCard";
import { CountryModal } from "../../component/CountryModal";
import { Footer } from "../../component/footer";

export const Home = () => {
    const { data, loading, error } = useFetchCountries(CountriesGraphQL);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <Header title="Countries Information" />
            <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 py-12">

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

                    {/* Countries Grid */}
                    {data && !loading && (
                        <>
                            <div className="mb-8">
                                <p className="text-gray-600 text-center">
                                    Displaying <span className="font-bold text-blue-600">{data.countries.length}</span> countries
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {data.countries.map((country) => (
                                    <CountryCard
                                        key={country.name}
                                        country={country}
                                        onCardClick={handleCardClick}
                                    />
                                ))}
                            </div>
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
    )
}