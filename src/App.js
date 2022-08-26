
import './App.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx'
import Cards from './Cards.jsx'
import cardImg from './assets/image 12.png'
import cardImgTwo from './assets/wedding-photography 1.png'
import cardImgThree from './assets/mountain-bike 1.png'

function App() {
 
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Cards 
      // img= './assets/mountain-bike 1.png'
      name= 'hello'
      />
    </div>
  );
}

export default App;
