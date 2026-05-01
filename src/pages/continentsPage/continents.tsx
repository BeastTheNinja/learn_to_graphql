import { Link } from "react-router";
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";

interface Continent {
    code: string;
    name: string;
}

export const ContinentsPage = () => {
    const continents: Continent[] = [
        { code: "AF", name: "Africa" },
        { code: "AN", name: "Antarctica" },
        { code: "AS", name: "Asia" },
        { code: "EU", name: "Europe" },
        { code: "NA", name: "North America" },
        { code: "OC", name: "Oceania" },
        { code: "SA", name: "South America" },
    ];

    return (
        <>
            <Header title="Explore by Continent" />
            <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 py-12">
                    <Link
                        to="/"
                        className="mb-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
                    >
                        ← Back to Home
                    </Link>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {continents.map((continent) => (
                            <Link
                                key={continent.code}
                                to={`/continent/${continent.code}`}
                                className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 p-8 block text-center"
                            >
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">{continent.name}</h2>
                                <p className="text-gray-600">Click to view countries</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};