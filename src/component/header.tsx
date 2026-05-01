interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <header className="bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 text-white py-8 shadow-lg">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{title}</h1>
                <p className="text-blue-100 mt-2 text-lg">Discover information about countries worldwide</p>
            </div>
        </header>
    );
}