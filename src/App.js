import './App.css';
import Card from './components/Card';
import Heropage from './components/Heropage';
import Navbar from './components/Navbar';
import Data from './Data';

function App() {
  let cardData = Data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        status={card.openSpots == 0 ? 'SOLD OUT' : 'AVAIABLE'}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <div className='App'>
      <Navbar />
      <Heropage />
      <section className='cards'>{cardData}</section>
      {/* <Card
        img='katie-zaferes.png'
        status='SOLD OUT'
        rating='5.0'
        reviewCount={6} //expresion para dsp poder hacer calculos o sumar.
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price='136'
  /> */}
    </div>
  );
}

export default App;
