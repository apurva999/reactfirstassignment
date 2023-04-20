import logo from './logo.svg';
import './App.css';
import { Btn } from './components/Button';
import { Reactb } from './components/Reactbenefits';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Reactb/>
      <Btn/> 
      </header>
    </div>
  );
}

export default App;