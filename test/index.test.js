import { strictEqual, notStrictEqual  } from 'assert';
import { exchangeCurrency, getExchangeRate, getExchangeTimespanRatesList, getRequestUrl} from '../index.js';
import { LATEST, currency } from '../config/constant.js';
import  FetchService from '../services/fetchService.js';


describe('Component tests of all functionalities', () => {

    // exchangeCurrency unit tests
    it('Currency exchange from EUR to GBP with LATEST rate with amount 200 should return not null', async () => {
        notStrictEqual(await exchangeCurrency(currency.EUR, currency.GBP, 200, LATEST), null);
    });

    it('Currency exchange from EUR to GBP at 2018-02-15 with amount 200 should return 177.32000000000002 and vice versa 225.58087074', async () => {
        strictEqual(await exchangeCurrency(currency.EUR, currency.GBP, 200, '2018-02-15'), 177.32000000000002);
        strictEqual(await exchangeCurrency(currency.GBP, currency.EUR, 200, '2018-02-15'), 225.58087074);
    });



    // getExchangeRate unit tests
    it('Getting exchange rate from EUR to PLN at 2018-02-15  should return 4.1532', async () => {
        const exchangeRate = await getExchangeRate(currency.EUR, currency.PLN, '2018-02-15');
        strictEqual(exchangeRate.rates.PLN, 4.1532);
    });

    it('Getting exchange rate from EUR to array of (GBP, JPY, PLN) at 2018-02-15 should return (0.8866, 133.11, 4.1532)', async () => {
        const exchangeRate = await getExchangeRate(currency.EUR, [currency.PLN, currency.GBP, currency.JPY], '2018-02-15');
        strictEqual(exchangeRate.rates.GBP, 0.8866);
        strictEqual(exchangeRate.rates.JPY, 133.11);
        strictEqual(exchangeRate.rates.PLN, 4.1532);
        strictEqual(exchangeRate.base, 'EUR');
        strictEqual(exchangeRate.date, '2018-02-15');
    });

    

    // getExchangeTimespanRatesList unit test
    it('Getting exchange rate from EUR to PLN between dates 2021-05-03 - 2021-05-09  should array length should be 5', async () => {
        const exchangeRate = await getExchangeTimespanRatesList(currency.EUR, currency.PLN, '2021-05-03', '2021-05-09');
        strictEqual(exchangeRate.length, 5);
        strictEqual(exchangeRate[0].rates.PLN, 4.5518);
    });



    // getRequestUrl unit test
    it('Getting exchange rate from EUR to PLN at 2018-02-15  should return 4.1532', async () => {
        const requestUrl = await getRequestUrl(currency.EUR, [currency.PLN, currency.JPY, currency.RON], '2021-05-03', '2021-05-09');
        strictEqual(requestUrl, 'https://api.ratesapi.io/api/2021-05-03?base=EUR&symbols=PLN,JPY,RON');
    });


    // getRequestUrl unit test
    it('Fetch function returning data from api.ratesAPI and its not empty', async () => {
        const data = await FetchService.fetchData('https://api.ratesapi.io/api/2021-05-03?base=EUR&symbols=PLN,JPY,RON');
        notStrictEqual(data, null);
    });

});