import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";

function CardList({cards}) {
    return(
        <>
            <div className="card">
                {cards.map((card) => (
                    <CardDetails key={card.id} cardProp={card}/>
                ))}
            </div>
        </>
    )
}

export default CardList;