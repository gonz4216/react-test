
import './App.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx'


function App() {
 
  return (
    <div className="App">
      <Nav />
      <Hero />
      
    </div>
  );
}

export default App;


const nums = [1,2,3]
let newNums = nums.map(e => e *2)
console.log(newNums)