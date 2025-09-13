import logo from './logo.svg';
import './App.css';
import Timer from './Pages/timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
