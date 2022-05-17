import './App.css';
import Card from './components/Card';
import Heropage from './components/Heropage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Heropage />
      <Card
        img='katie-zaferes.png'
        status='SOLD OUT'
        rating='5.0'
        reviewCount={6} //expresion para dsp poder hacer calculos o sumar.
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price='136'
      />
    </div>
  );
}

export default App;
