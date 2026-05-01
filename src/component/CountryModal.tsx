interface Country {
    name: string;
    emoji: string;
    currency: string;
    phone: string;
    continent: { name: string };
    languages?: { name: string }[];
}

interface CountryModalProps {
    country: Country | null;
    isOpen: boolean;
    onClose: () => void;
}

export const CountryModal = ({ country, isOpen, onClose }: CountryModalProps) => {
    if (!isOpen || !country) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with gradient */}
                <div className="bg-linear-to-r from-blue-500 to-indigo-600 px-8 py-6 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-white">{country.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white hover:text-blue-600 rounded-full w-10 h-10 flex items-center justify-center transition-all text-2xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Flag Section */}
                <div className="bg-linear-to-br from-blue-50 to-indigo-100 px-8 py-12 flex items-center justify-center">
                    <p className="text-8xl">{country.emoji}</p>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Continent */}
                        <div className="bg-linear-to-br from-green-50 to-emerald-100 rounded-lg p-4">
                            <p className="text-gray-600 text-sm font-semibold">Continent</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">{country.continent.name}</p>
                        </div>

                        {/* Currency */}
                        <div className="bg-linear-to-br from-yellow-50 to-amber-100 rounded-lg p-4">
                            <p className="text-gray-600 text-sm font-semibold">Currency</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">{country.currency}</p>
                        </div>

                        {/* Phone Code */}
                        <div className="bg-linear-to-br from-pink-50 to-rose-100 rounded-lg p-4">
                            <p className="text-gray-600 text-sm font-semibold">Phone Code</p>
                            <p className="text-xl font-bold text-gray-800 mt-2">+{country.phone}</p>
                        </div>

                        {/* Languages */}
                        {country.languages && country.languages.length > 0 && (
                            <div className="bg-linear-to-br from-purple-50 to-violet-100 rounded-lg p-4">
                                <p className="text-gray-600 text-sm font-semibold">Languages</p>
                                <p className="text-xl font-bold text-gray-800 mt-2">
                                    {country.languages.map(lang => lang.name).join(', ')}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="w-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};