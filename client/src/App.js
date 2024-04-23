import './App.css';
import { Theme, Button } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import Create from './components/search';

function App() {
  const [data, setData] = useState(null);
  const [firstName, setFirstName] = useState("derick");
  const [lastName, setLastName] = useState(null);
  const verificationToken = "-TEdm-j4BvRHYaVWyHoXsentIvolT6XNgWzcs6UcCvTtJUuqwXYyIx8L4oyeLkF8bF_R1CzJJAit5jexbq1ssEKIH7jHfBf1pcLPRVwnXJs1"; // not sure how this is obtained, may need to get it programmatically if becomes an issue

  const handleClick = (event) => {
  // send a request to prisoner api
  
  };

  useEffect(() => {
    fetch("localhost:5000/api", {
      method: "GET"
    }).then(response => response.json())
    .then((data) => {
      setData(data);
    });
  }, [])

  return (
    <Theme appearance='dark'>
      <div className="App">
        {data && <p>{ data.toString() }</p>}
        <Button onClick={handleClick}>Send Request</Button>
        <Create />
      </div>
    </Theme>
  );
}

export default App;
