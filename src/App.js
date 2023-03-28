import './App.css';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="calcPage">
        <Quote />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
