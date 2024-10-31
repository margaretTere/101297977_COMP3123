
import logo from './logo.svg';
import './App.css';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.studentId}</p>
        <p>{props.name}</p>
        <p>{props.college}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
