import Card from "./Card"

const Cards = ({ cards, whenClick }) => {
    return (
        <ul>
            {
                cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        whenClick={whenClick}
                    />
                ))
            }
        </ul>
    )
}

export default Cards