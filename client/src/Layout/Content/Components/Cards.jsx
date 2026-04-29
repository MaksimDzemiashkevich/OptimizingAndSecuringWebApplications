import React from "react";
import Card from "./Card";

const Cards = ({ filteredProducts }) => {



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((element, index) =>
                    <Card key={index} element={element}></Card>))
                : (
                    <div className="col-span-full text-center py-10 text-gray-500">
                        Товаров не найдено, братан :(
                    </div>
                )
            }

            
        </div>
    )
}

export default Cards;