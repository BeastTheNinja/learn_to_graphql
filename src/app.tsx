import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/homePage/home";
import { ContinentsPage } from "./pages/continentsPage/continents";
import { ContinentPage } from "./pages/continentsPage/continent";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/continents" element={<ContinentsPage />} />
                <Route path="/continent/:code" element={<ContinentPage />} />
            </Routes>
        </BrowserRouter>
    );
}