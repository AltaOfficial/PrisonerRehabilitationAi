import './App.css';
import { Theme } from '@radix-ui/themes';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const superagent = require("superagent").agent();
  const verificationToken = "-TEdm-j4BvRHYaVWyHoXsentIvolT6XNgWzcs6UcCvTtJUuqwXYyIx8L4oyeLkF8bF_R1CzJJAit5jexbq1ssEKIH7jHfBf1pcLPRVwnXJs1"; // not sure how this is obtained, may need to get it programmatically if becomes an issue

  const searchPayload = { // should be edited to include user search terms
    __RequestVerificationToken: verificationToken, 
    IsAuthenticated: null,
    LastName: null,
    FirstName: null,
    CntyCommitment: null,
    CntyResidential: null,
    ZipCode: null,
    Status: "I", // I for incararated
    PbDate: null,
    NumPrefix: "A",
    OffNumber: null,
    Sort: "N"
  };

  const handleClick = (event) => {
    // send a request to prisoner api
    superagent.post("https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults")
    .send(searchPayload) // some of these "may" not need to be includeded in the payload
    .set("accept", "*/*")
    .set("accept-language", "en-US,en;q=0.9")
    .set("cache-control", "max-age=0")
    .set("content-type", "application/x-www-form-urlencoded")
    .set("sec-ch-ua", "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"")
    .set("sec-ch-ua-mobile", "?0")
    .set("sec-ch-ua-platform", "\"macOS\"")
    
    .then(response => {
      console.log(response);
      console.log(response.status);
    });
  };

  return (
    <Theme appearance='dark'>
      <div className="App">
        {data && <p>{ data.toString() }</p>}
        <button onClick={handleClick}>Send Request</button>
      </div>
    </Theme>
  );
}

export default App;
