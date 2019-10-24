import React from 'react';
import './App.css';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  updateResults(results) {
    this.setState({ results });
  }

  renderResults() {
    return(
      <ul>
        {this.state.results.map((result, i) => <li key={i}>{result}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        Let's build a search bar!
        <SearchBar setAppState={this.updateResults.bind(this)} />
        {this.renderResults()}
      </div>
    );
  }
}

export default App;
