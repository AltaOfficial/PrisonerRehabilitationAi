import './App.css';
import { Theme } from '@radix-ui/themes';
import { useState } from 'react';
import Create from './search';

function App() {
  const [data, setData] = useState(null);
  const [firstName, setFirstName] = useState("derick");
  const [lastName, setLastName] = useState(null);
  const verificationToken = "-TEdm-j4BvRHYaVWyHoXsentIvolT6XNgWzcs6UcCvTtJUuqwXYyIx8L4oyeLkF8bF_R1CzJJAit5jexbq1ssEKIH7jHfBf1pcLPRVwnXJs1"; // not sure how this is obtained, may need to get it programmatically if becomes an issue

  const searchPayload = { // should be edited to include user search terms
    __RequestVerificationToken: verificationToken, 
    IsAuthenticated: "",
    LastName: "",
    FirstName: firstName,
    CntyCommitment: "",
    CntyResidential: "",
    ZipCode: "",
    Status: "I", // I for incararated
    PbDate: "",
    NumPrefix: "A",
    OffNumber: "",
    Sort: "N"
  };

  const handleClick = (event) => {
  // send a request to prisoner api
  
  };

  return (
    <Theme appearance='dark'>
      <div className="App">
        {data && <p>{ data.toString() }</p>}
        <button onClick={handleClick}>Send Request</button>
        <Create />
      </div>
    </Theme>
  );
}

export default App;
