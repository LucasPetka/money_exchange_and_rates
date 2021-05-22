import  {LATEST, exchangeAPI, currency} from '../config/constant.js';
import FetchService from '../services/fetchService.js';
import CacheService from '../services/cacheService.js';
import moment from 'moment';


class CurrencyExhangeService {

    constructor(ttlSeconds) {
        this.cacheService = new CacheService(ttlSeconds);
    }


    async getExchangeRate(base = currency.EUR, currencies = null, date = LATEST)
    {
        if(currencies !== null)
        {
            if(Array.isArray(currencies))
            {
                let url = `${exchangeAPI}${date}?base=${base}&symbols=${currencies.toString()}`;
                return await this.cacheService.cacheData(url, await FetchService.fetchData(url));
            }
            else
            {
                let url = `${exchangeAPI}${date}?base=${base}&symbols=${currencies}`;
                return await this.cacheService.cacheData(url, await FetchService.fetchData(url));
            }
        }
        else
        {
            let url = `${exchangeAPI}${date}?base=${base}`;
            return await this.cacheService.cacheData(url, await FetchService.fetchData(url));
        }

    }


    getRequestUrl(base = currency.EUR, currencies = null, date = LATEST)
    {
        if(currencies !== null)
        {
            if(Array.isArray(currencies))
            {
                return `${exchangeAPI}${date}?base=${base}&symbols=${currencies.toString()}`;
            }
            else
            {
                return `${exchangeAPI}${date}?base=${base}&symbols=${currencies}`;
            }

        }
        else
        {
            return `${exchangeAPI}${date}?base=${base}`;
        }

    }


    async getExchangeTimespanRatesList(base = currency.EUR, currencies = null, dateFrom, dateTo)
    {
        let timeSpanRates = [];
        dateFrom = moment(dateFrom).format('YYYY-MM-DD');
        dateTo = moment(dateTo).format('YYYY-MM-DD');

        while (moment(dateFrom) <= moment(dateTo)) 
        {
            let date = new Date(dateFrom);

            if(date.getDay() == 5 || date.getDay() == 6)
            {
                dateFrom = moment(dateFrom).add(1, 'days').format('YYYY-MM-DD');
                continue;
            }

            let exchangeRates = await this.getExchangeRate(base, currencies, dateFrom);
            timeSpanRates.push(exchangeRates);

            dateFrom = moment(dateFrom).add(1, 'days').format('YYYY-MM-DD');
        }
        
        return timeSpanRates;
    }


    async exchangeCurrency(from, to, value, date)
    {
        let exchangeRate = await this.getExchangeRate(from, to, date);

        return value * exchangeRate.rates[to];
    }

}

export default CurrencyExhangeService;