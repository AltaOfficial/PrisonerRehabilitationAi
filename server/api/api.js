const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("stuff");
});

router.post("/fetch", (req, res) => {
    console.log("received post request");
    console.log(req)

    const searchPayload = { // should be edited to include user search terms
        __RequestVerificationToken: "ctkxc7JntBGxv0uD0Jd25Fo4C4_VxPwTM70VOTjNrRxI3Zz6pWJA7FWR5hzWYYVGg7P47gy8Q05XTJRrbI9c6jRv5OPbk2rd0ExxI6bVQZw1", 
        IsAuthenticated: "",
        LastName: "",
        FirstName: "derick",
        CntyCommitment: "",
        CntyResidential: "",
        ZipCode: "",
        Status: "I", // I for incararated
        PbDate: "",
        NumPrefix: "A",
        OffNumber: "",
        Sort: "N"
    };

    const postOptions = {
        url: "https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults",
        headers: {
            Connection: 'keep-alive',
            Cookie: '__RequestVerificationToken_L09mZmVuZGVyU2VhcmNo0=ctkxc7JntBGxv0uD0Jd25Fo4C4_VxPwTM70VOTjNrRxI3Zz6pWJA7FWR5hzWYYVGg7P47gy8Q05XTJRrbI9c6jRv5OPbk2rd0ExxI6bVQZw1; ASP.NET_SessionId=celyezxenxwwl3sju3jhseet',
            Origin: 'https://appgateway.drc.ohio.gov',
            Referer: 'https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'content-type': 'application/x-www-form-urlencoded',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'upgrade-insecure-requests': '1'
          },
          body: new URLSearchParams(searchPayload).toString()
    };

    const getOptions = {
        url: "https://appgateway.drc.ohio.gov/OffenderSearch/Search/Results",
        headers: {
            Connection: 'keep-alive',
            Cookie: '__RequestVerificationToken_L09mZmVuZGVyU2VhcmNo0=ctkxc7JntBGxv0uD0Jd25Fo4C4_VxPwTM70VOTjNrRxI3Zz6pWJA7FWR5hzWYYVGg7P47gy8Q05XTJRrbI9c6jRv5OPbk2rd0ExxI6bVQZw1; ASP.NET_SessionId=celyezxenxwwl3sju3jhseet',
            Origin: 'https://appgateway.drc.ohio.gov',
            Referer: 'https://appgateway.drc.ohio.gov/OffenderSearch/Search/SearchResults',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'content-type': 'application/x-www-form-urlencoded',
            'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'upgrade-insecure-requests': '1'
          }
    };

    // requests.jar();
    // requests.post(postOptions, (error, response, body) => {
    //     requests.get(getOptions, (error, response, body) => {
    //         console.log(response);
    //         console.log(response.statusCode);
    //     });
    // });

    res.send(req.body);
});

router.get("/clear", (req, res) => {
    console.clear();
    res.status(200);
    res.send("console cleared");
});

module.exports = router;
