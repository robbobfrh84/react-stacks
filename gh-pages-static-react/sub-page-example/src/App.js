import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h3> Example hosted from Main's github "react-stacks" repository</h3>
        <p> 
          See&nbsp;
          <a href='https://github.com/robbobfrh84/react-stacks/tree/main/gh-pages-static-react'>
            gh-pages-static-react
          </a>
          &nbsp;subfolder for source code and more info... 
        </p>
    
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
