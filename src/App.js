import './App.css';
import Card from './components/Card';
import Heropage from './components/Heropage';
import Navbar from './components/Navbar';
import Data from './Data';

function App() {
  let cardData = Data.map((card) => {
    return (
      <Card
        key={card.id} //poner un id a cada carta
        card={card}
      />
    );
  });
  return (
    <div className='App'>
      <Navbar />
      <Heropage />
      <section className='cards'>{cardData}</section>
    </div>
  );
}

export default App;

/*img={card.coverImg}
status={card.openSpots == 0 ? 'SOLD OUT' : 'AVAIABLE'}
rating={card.stats.rating}
reviewCount={card.stats.reviewCount}
country={card.location}
title={card.title}
price={card.price}*/
