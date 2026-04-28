import React from "react";
import SortComponent from "./SortComponent";
import Cards from "./Cards";

const RightColumn = () => {
    return (
        <div className="flex-1">
            <SortComponent></SortComponent>
            <Cards></Cards>
        </div>
    )
}

export default RightColumn;