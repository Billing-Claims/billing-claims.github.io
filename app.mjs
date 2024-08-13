// import scrape from 'website-scraper';
// import PuppeteerPlugin from 'website-scraper-puppeteer';

// await scrape({
//     urls: ['https://billingclaims.framer.website/'],
//     directory: './billing',
//     plugins: [
//         new PuppeteerPlugin({
//             launchOptions: { headless: false }, /* optional */
//             scrollToBottom: { timeout: 10000, viewportN: 40 }, /* optional */
//             blockNavigation: false, /* optional */
//             isMobile: false, /* optional */
//             defaultViewport: null
//         }),
//     ],
// });

import scrape from 'website-scraper'; // only as ESM, no CommonJS
// const scrape = require('website-scraper'); // CommonJS only
const options = {
  urls: ['https://billingclaims.framer.website/'],
  directory: './opium'
};

// with async/await
// const result = await scrape(options);

// with promise
scrape(options).then((result) => {});