export default function Card(props) {
    const img = require('../images/' + props.img)
    return (
        <div className='card'>
            <img src={img} alt='Ronaldo' className='card-img' />
            <br />
            <div className='card-ratings'>
                <span>{props.rating}</span>
                <span className="grey"> ({props.reviewCount}) </span>
                <span className="grey"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p> From <b>${props.amount}</b> / person</p>
        </div>
    )
}