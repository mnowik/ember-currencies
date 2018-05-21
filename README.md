# Ember-currencies
[![npm version](https://badge.fury.io/js/ember-currencies.svg)](https://badge.fury.io/js/ember-currencies)

A simple Addon that contains the 2 following lists:
 - all the currencies in ISO3 (USD), ISO-Numeric (840), English name (United States dollar) formats and their symbol ($) if applicable.
 - the currencies per country.

Here are a list of the main helpers:
 - Currency ISO3 or ISO-Numeric to Currency object.
 - Country ISO2 to array of Currencies object (countries may have multiple currencies).

You can find more information about ISO 4217 codes here:
 - [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 - [Currency Authority](http://www.xe.com/iso4217.php)

## Installation

* `ember install ember-currencies`


## Usage

### All imports
```js
import { CURRENCIES_LIST, CURRENCIES_PER_COUNTRY_LIST } from 'ember-currencies';
import { getCurrency, getCurrenciesForCountry } from 'ember-currencies';
import defaultEmberCurrencies from 'ember-currencies';
```

### Example 1: currencies lists
```js
import Em from 'ember';
import { CURRENCIES_LIST } from 'ember-currencies';

export default Em.Controller.extend({

  CURRENCIES_LIST: CURRENCIES_LIST,
  ...
});
```

### Example 2: currencies properties
```js
import Em from 'ember';
import { getCurrency } from 'ember-currencies';

export default Em.Controller.extend({

  currencyHelper() {
    let expect   = {name: "United States dollar", iso3: "USA", isoNumeric: "840", symbol: "$"};
    let currency1 = getCurrency('USD');
    let currency2 = getCurrency('840');

    currency1 === expect  // true
    currency2 === expect  // true

  },
  ...
});
```

### Example 3: Currencies per country lists
```js
import Em from 'ember';
import emberCurrencies from 'ember-currencies';

export default Em.Controller.extend({

  US_STATES: emberCurrencies.CURRENCIES_PER_COUNTRY_LIST,
  ...
});
```

### Example 4: states properties
```js
import Em from 'ember';
import { getCurrenciesForCountry } from 'ember-currencies';

export default Em.Controller.extend({

  currencyHelper() {
    let expect = {name: "United States dollar", iso3: "USA", isoNumeric: "840", symbol: "$"};
    let currency = getCurrenciesForCountry('US');

    currency === expect  // true
  },
  ...
});
```
## Running Tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

## Contributing

PRs welcome!
