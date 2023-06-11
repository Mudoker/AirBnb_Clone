import '../index.css';

const img = require('../images/airbnb-hero.png');
export default function Hero() {
    return (
        <div className='hero'>
            <img src={img} alt="airbnb logo" className='hero-img'/>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}