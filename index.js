import CurrencyExchangeService from './services/currencyExchangeService.js';
import  {LATEST, currency, ttl} from './config/constant.js';

const currencyExhangeService = new CurrencyExchangeService(ttl);

/**
 * This function returns exhange rate of one selected date by selected currencies
 * @param {string} base base currency
 * @param {string} currencies currency that you want get exchange rate
 * @param {string} date date of exchange rate (leave empty if latest)
 * @returns {array} exchange rates
 */
export const getExchangeRate = 
        async (base = currency.EUR, currencies = null, date = LATEST) => 
            await currencyExhangeService.getExchangeRate(base, currencies, date);

/**
 * This function returns URL of generated request
 * @param {string} base base currency
 * @param {string} currencies currencies that you want get exchange rate
 * @param {string} date date of exchange rate (leave empty if latest)
 * @returns {string} URL that would be sent to API
 */
export const getRequestUrl = 
        (base = currency.EUR, currencies = null, date = LATEST) => 
            currencyExhangeService.getRequestUrl(base, currencies, date);

/**
 * This function returns exhange rates list of selected timespan by selected currencies
 * @param {string} base base currency
 * @param {string} currencies currencies that you want get exchange rate
 * @param {string} dateFrom dateFrom
 * @param {string} dateTo dateTo
 * @returns {array} exchange rates list by date
 */            
export const getExchangeTimespanRatesList = 
        async (base = currency.EUR, currencies = null, dateFrom, dateTo) => 
            await currencyExhangeService.getExchangeTimespanRatesList(base, currencies, dateFrom, dateTo);

/**
 * This function exchange currency from one to other by selecting value of it
 * @param {string} base base currency
 * @param {string} currency currency that you want get exchange rate
 * @param {string} value value of base currency
 * @param {string} date date of exchange rate (leave empty if latest)
 * @returns {number} exchanged currency
 */
export const exchangeCurrency = 
        async (base, currency, value, date = LATEST) => 
            await currencyExhangeService.exchangeCurrency(base, currency, value, date);


//Manual tests

// while (true) {
//     console.time('100-elements');
//     getExchangeTimespanRatesList(currency.EUR, [currency.KRW, currency.RUB], '2020-09-08', '2020-09-20').then(function(result){
//         console.log(result);
//     });
//     console.timeEnd('100-elements');
//     await new Promise(resolve => setTimeout(resolve, 4000));
// }


// getExchangeRate(currency.EUR, [currency.PLN, currency.RUB], '2018-11-05').then(function(result){
//     console.log(result);
// });


// exchangeCurrency(currency.GBP, currency.EUR, 200, '2018-02-15').then(function(result){
//         console.log(result);
//     });
            

//console.log(getRequestUrl(currency.EUR, [currency.KRW, currency.RUB], '2018-11-15'));


// getExchangeTimespanRatesList(currency.EUR, [currency.KRW, currency.RUB], '2020-09-8', '2020-09-20').then(function(result){
//     console.log(result);
// });


// exchangeCurrency(currency.EUR, currency.RUB, 52).then(function(result){
//     console.log(result);
// });

