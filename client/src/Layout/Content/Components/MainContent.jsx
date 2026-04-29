import React, {useState, useMemo} from "react";
import Aside from "./Aside";
import RightColumn from "./RightColumn";
import { products } from "../../DataBase";

const MainContent = () => {

    const [ratings, setRatings] = useState({
        0: false,
        1: false,
        2: false
      });

    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [sortBy, setSortBy] = useState("name-asc");

    const toggleRating = (key) => {
        setRatings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
      };

    const filteredProducts = useMemo(() => {
        let result = products.filter(product => {
            const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;

            const activeRatings = Object.entries(ratings).filter(([_, value]) => value).map(([key]) => 5 - parseInt(key));

            const matchesRating = activeRatings.length === 0 || activeRatings.some(r => product.rating >= r);

            return matchesPrice && matchesRating;
        });

        return [...result].sort((a, b) => {
            switch (sortBy) {
                case "price-asc": return a.price - b.price;
                case "price-desc": return b.price - a.price;
                case "name-asc": return a.title.localeCompare(b.title);
                case "name-desc": return b.title.localeCompare(a.title);
                default: return 0;
            }
        });
    }, [ratings, priceRange, sortBy]);

    return (
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <Aside ratings={ratings} toggleRating={toggleRating} priceRange={priceRange} setPriceRange={setPriceRange}></Aside>
                <RightColumn ratings={ratings} toggleRating={toggleRating} filteredProducts={filteredProducts} priceRange={priceRange} setPriceRange={setPriceRange} sortBy={sortBy} setSortBy={setSortBy}></RightColumn>
            </div>
        </div>
    )
}

export default MainContent;