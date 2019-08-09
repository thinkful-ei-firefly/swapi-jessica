import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import ErrorMessage from './ErrorMessage'

class App extends React.Component {

  state = {
    results: [],
    loading: false,
    searched: false
  };

  logResults = (newResults) => {
    this.setState({
      results: newResults,
      loading: false,
      searched: true
    })
  }

  setLoading = () => {
    this.setState({
      loading: true
    })
  }

  render() {
    return (
    <main className='App'>
      <ErrorMessage>
        <header>
          <h1>Star Wars Search</h1>
          <SearchForm logResults={this.logResults} setLoading={this.setLoading}/>
        </header>
        <section>
          <ul>
            <SearchResults results={this.state.results} loading={this.state.loading} searched={this.state.searched} />
          </ul>        
        </section>
      </ErrorMessage>      
    </main>
    );
  }
}

export default App;