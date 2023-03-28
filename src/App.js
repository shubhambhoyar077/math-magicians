import './App.css';
// import Home from './components/Home';
import Quote from './components/Quote';
// import Calculator from './components/Calculator';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home /> */}
      {/* <div className="calcPage">
        <Quote />
        <Calculator />
      </div> */}
      <Quote />
    </div>
  );
}

export default App;
