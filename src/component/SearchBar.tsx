interface SearchBarProps {
    onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search for a country..."
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-base"
                />
            </div>
        </div>
    )
}