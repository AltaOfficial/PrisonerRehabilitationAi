import './App.css';
import { Theme } from '@radix-ui/themes';
import { useState } from 'react';
import Search from './components/search';

function App() {
  const [data, setData] = useState(null);

  return (
    <Theme appearance='dark'>
      <div className="App">
        {data && <p>{ data.toString() }</p>}
        <Search setData={(data) => setData(data)}/>
      </div>
    </Theme>
  );
}

export default App;
