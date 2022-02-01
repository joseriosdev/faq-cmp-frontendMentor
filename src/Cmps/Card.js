import arrow from '../Imgs/icon-arrow-down.svg'

const Card = ({ card, whenClick }) => {
    return (
        <li
            className={card.isActive ? 'card active' : 'card'}
            onClick={() => whenClick(card.id)}>
            
            <div className='card-header'>
                <h3 className='card-title'>{card.question}</h3>
                <img src={arrow} alt='Arrow' className='card-img' />
            </div>
            <p className='card-answer'>{card.answer}</p>
        </li>
    )
}

export default Card
