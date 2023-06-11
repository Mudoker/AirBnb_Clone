import '../index.css';
const img = require('../images/air-bnb-logo.png');
export default function Navbar() {
    return (
        <div className='Nav'> 
            <img src={img} alt="airbnb logo" />
        </div>
    );
}