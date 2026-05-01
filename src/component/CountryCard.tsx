interface Country {
    name: string;
    emoji: string;
    currency: string;
    phone: string;
    continent: { name: string };
}

interface CountryCardProps {
    country: Country;
    onCardClick: (country: Country) => void;
}

export const CountryCard = ({ country, onCardClick }: CountryCardProps) => {
    return (
        <div
            onClick={() => onCardClick(country)}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200"
        >
            {/* Flag Section */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-100 px-6 py-8 flex items-center justify-center">
                <p className="text-7xl">{country.emoji}</p>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{country.name}</h2>

                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                        <div>
                            <p className="text-gray-600">Currency</p>
                            <p className="font-semibold text-gray-800">{country.currency}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                        <div>
                            <p className="text-gray-600">Phone Code</p>
                            <p className="font-semibold text-gray-800">+{country.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <p className="text-gray-600">Continent</p>
                            <p className="font-semibold text-gray-800">{country.continent.name}</p>
                        </div>
                    </div>
                </div>

                <button className="w-full mt-5 bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200">
                    View Details
                </button>
            </div>
        </div>
    );
};