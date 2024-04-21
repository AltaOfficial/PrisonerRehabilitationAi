import puppeteer from 'puppeteer';

const url = "https://appgateway.drc.ohio.gov/OffenderSearch/";

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
}
