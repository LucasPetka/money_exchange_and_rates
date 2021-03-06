## Currency exchange and rates - npm component

### Install
To install component type this in terminal
 `npm install money_exchange_and_rates` 

### Usage examples
```
getExchangeRate(currency.EUR, [currency.PLN, currency.RUB], '2018-11-05');

getExchangeRate(currency.EUR, currency.RUB);

exchangeCurrency(currency.GBP, currency.EUR, 200, '2018-02-15');

exchangeCurrency(currency.EUR, currency.RUB, 52);

getRequestUrl(currency.EUR, [currency.PLN, currency.RUB], '2018-11-15');

getRequestUrl(currency.EUR, currency.RUB);

getExchangeTimespanRatesList(currency.EUR, [currency.PLN, currency.RUB], '2020-09-8', '2020-09-20');

getExchangeTimespanRatesList(currency.EUR, currency.RUB, '2020-09-8', '2020-09-20');
```

### Table of Contents

*   [getExchangeRate][1]
    *   [Parameters][2]
*   [getRequestUrl][3]
    *   [Parameters][4]
*   [getExchangeTimespanRatesList][5]
    *   [Parameters][6]
*   [exchangeCurrency][7]
    *   [Parameters][8]

## getExchangeRate

This function returns exhange rate of one selected date by selected currencies

### Parameters

*   `base` **[string][9]** base currency (optional, default `currency.EUR`)
*   `currencies` **[string][9]** currency that you want get exchange rate (optional, default `null`)
*   `date` **[string][9]** date of exchange rate (leave empty if latest) (optional, default `LATEST`)

Returns **[array][10]** exchange rates

## getRequestUrl

This function returns URL of generated request

### Parameters

*   `base` **[string][9]** base currency (optional, default `currency.EUR`)
*   `currencies` **[string][9]** currencies that you want get exchange rate (optional, default `null`)
*   `date` **[string][9]** date of exchange rate (leave empty if latest) (optional, default `LATEST`)

Returns **[string][9]** URL that would be sent to API

## getExchangeTimespanRatesList

This function returns exhange rates list of selected timespan by selected currencies

### Parameters

*   `base` **[string][9]** base currency (optional, default `currency.EUR`)
*   `currencies` **[string][9]** currencies that you want get exchange rate (optional, default `null`)
*   `dateFrom` **[string][9]** dateFrom
*   `dateTo` **[string][9]** dateTo

Returns **[array][10]** exchange rates list by date

## exchangeCurrency

This function exchange currency from one to other by selecting value of it

### Parameters

*   `base` **[string][9]** base currency
*   `currency` **[string][9]** currency that you want get exchange rate
*   `value` **[string][9]** value of base currency
*   `date` **[string][9]** date of exchange rate (leave empty if latest) (optional, default `LATEST`)

Returns **[number][11]** exchanged currency

[1]: #getexchangerate

[2]: #parameters

[3]: #getrequesturl

[4]: #parameters-1

[5]: #getexchangetimespanrateslist

[6]: #parameters-2

[7]: #exchangecurrency

[8]: #parameters-3

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[10]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[11]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
