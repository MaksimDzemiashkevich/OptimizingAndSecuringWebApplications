import React from "react";
import Aside from "./Aside";
import RightColumn from "./RightColumn";

const MainContent = () => {
    return (
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <Aside></Aside>
                <RightColumn></RightColumn>
            </div>
        </div>
    )
}

export default MainContent;