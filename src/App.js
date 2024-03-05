import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://ec2-3-37-107-212.ap-northeast-2.compute.amazonaws.com:8080/testCors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ~~~~~
        </a>
      </header>
    </div>
  );
}

export default App;
