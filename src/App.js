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
        img='/images/katie-zaferes.png'
        status='SOLD OUT'
        rating='5.0'
        reviewCount='6'
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price='136'
      />
    </div>
  );
}

export default App;
