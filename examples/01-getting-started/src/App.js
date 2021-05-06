import React from 'react';
import { Results } from './components/Results';
import { ResultStats } from './components/ResultStats';

function App() {
  const [inputValue, setInputValue] = React.useState('react');
  const [query, setQuery] = React.useState(inputValue);

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          setQuery(inputValue);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="submit">検索</button>
      </form>

      <ResultStats query={query} />
      <Results query={query} />
    </div>
  );
}

export default App;
