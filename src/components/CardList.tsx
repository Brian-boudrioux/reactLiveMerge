import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";

function CardList() {
    const [cards, setCards] = useState([]);
    
    // TODO : Magic number 10 will evolve with other features
    useEffect(() => {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0')
        .then((response) => response.json())
        .then(({data}) => setCards(data))
    }, [])

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