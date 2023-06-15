import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                img = 'Ronaldo.png'
                rating = {5}
                reviewCount = {6}
                country = 'Portugal'
                title = 'Cristiano Ronaldo'
                amount = {136}
            />
        </div>
    );
}