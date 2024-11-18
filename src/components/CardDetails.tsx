import './cardDetails.css'

function CardDetails({cardProp}) {
    return (
        <>
        <div className="card">
            <h1>{cardProp.name}</h1>
            <h2>{cardProp.race}</h2>
            <h3>{cardProp.type}</h3>
        </div>
        </>
    )    
}

export default CardDetails;