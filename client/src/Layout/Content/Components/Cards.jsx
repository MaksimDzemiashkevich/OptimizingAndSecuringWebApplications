import React from "react";
import Card from "./Card";
import { products } from "../../DataBase";

const Cards = () => {



    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((element, index) =>
                <Card key={index} element={element}></Card>)
            }

            )
        </div>
    )
}

export default Cards;