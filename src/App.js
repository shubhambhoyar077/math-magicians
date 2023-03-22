import './App.css';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <h1>Math Magicians</h1>
      <div className="calcPage">
        <Quote />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
