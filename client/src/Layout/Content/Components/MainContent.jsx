import React, {useState, useEffect} from "react";
import Aside from "./Aside";
import RightColumn from "./RightColumn";

const MainContent = () => {

    const [ratings, setRatings] = useState({
        0: false,
        1: false,
        2: false
      });

    const toggleRating = (key) => {
        setRatings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
      };

    return (
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <Aside ratings={ratings} setRatings={setRatings} toggleRating={toggleRating}></Aside>
                <RightColumn ratings={ratings} setRatings={setRatings} toggleRating={toggleRating}></RightColumn>
            </div>
        </div>
    )
}

export default MainContent;