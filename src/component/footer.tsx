export const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Countries App</h3>
                        <p className="text-gray-400 text-sm">
                            Explore countries around the world with detailed information about currencies, languages, and more.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Quick Links</h3>
                        <ul className="text-gray-400 text-sm space-y-1">
                            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Countries</a></li>
                        </ul>
                    </div>

                    {/* API Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Data Source</h3>
                        <a
                            href="https://countries.trevorblades.com/graphql"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition text-sm"
                        >
                            Countries GraphQL API
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; 2026 <span className="font-semibold text-blue-400">Sebastian (BeastTheNinja)</span>. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/BeastTheNinja/learn_to_graphql" className="text-gray-400 hover:text-blue-400 transition">GitHub</a>
                            <a href="https://beast-the-ninja-portfolio.vercel.app/" className="text-gray-400 hover:text-blue-400 transition">Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};