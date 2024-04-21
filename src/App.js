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
    fetch("https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults", {
    redirect: "follow",
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\"Google Chrome\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1"
    },
    "referrer": "https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `__RequestVerificationToken=${verificationToken}&IsAuthenticated=&LastName=&FirstName=derrick&CntyCommitment=&CntyResidential=&ZipCode=&Status=I&PbDate=&NumPrefix=A&OffNumber=&Sort=N`,
    "method": "POST",
    "mode": "no-cors",
    "credentials": "include"
    }).then(response => response.text()).then(response => {
      console.log("text: " + response);
      setData(response);
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
