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
    const options = {
      method: 'POST',
      headers: {
        Connection: 'keep-alive',
        Cookie: '__RequestVerificationToken_L09mZmVuZGVyU2VhcmNo0=ctkxc7JntBGxv0uD0Jd25Fo4C4_VxPwTM70VOTjNrRxI3Zz6pWJA7FWR5hzWYYVGg7P47gy8Q05XTJRrbI9c6jRv5OPbk2rd0ExxI6bVQZw1; ASP.NET_SessionId=celyezxenxwwl3sju3jhseet',
        Origin: 'https://appgateway.drc.ohio.gov',
        Referer: 'https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'upgrade-insecure-requests': '1'
      },
      body: new URLSearchParams({
        __RequestVerificationToken: '-TEdm-j4BvRHYaVWyHoXsentIvolT6XNgWzcs6UcCvTtJUuqwXYyIx8L4oyeLkF8bF_R1CzJJAit5jexbq1ssEKIH7jHfBf1pcLPRVwnXJs1',
        '': [
          'IsAuthenticated=',
          'LastName=',
          'CntyCommitment=',
          'CntyResidential=',
          'ZipCode=',
          'PbDate=',
          'OffNumber='
        ],
        FirstName: 'derrick',
        Status: 'I',
        NumPrefix: 'A',
        Sort: 'N'
      })
    };
    
    fetch('https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
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
