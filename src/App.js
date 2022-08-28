
import './App.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx'
import Cards from './Cards.jsx'
import Img from './images/image 12.png'
// import ImgTwo from './images/wedding-photography 1.png'
// import ImgThree from './images/mountain-bike 1.png'

function App() {
 
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Cards 
      img= {Img}
      rating= '5.0'
      reviewCount= {6}
      country= "USA"
      title="Life Lessons with katie"
      price={136}
      />
    </div>
  );
}

export default App;


const nums = [1,2,3]
let newNums = nums.map(e => e *2)
console.log(newNums)