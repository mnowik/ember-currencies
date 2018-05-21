import {
  CURRENCIES_LIST,
  CURRENCIES_PER_COUNTRY_LIST
} from 'ember-currencies';
import CURRENCIES_LIST_DEFAULT from 'ember-currencies/utils/currencies-lists';
import { module, test } from 'qunit';

module('Unit | Utility | currencies list | CURRENCIES_LIST', function() {
  test('Check the length of list `CURRENCIES_LIST`', function(assert) {
    let result = CURRENCIES_LIST.length;
    assert.equal(result, 178);
  });

  test('Check the element 0 of list `CURRENCIES_LIST`', function(assert) {
    let result = CURRENCIES_LIST[0];
    let expect = {iso3: 'AED', isoNumeric: '784', name: 'United Arab Emirates dirham', symbol: ''};
    assert.deepEqual(result, expect);
  });

  test('Check the element 20 of list `CURRENCIES_LIST`', function(assert) {
    let result = CURRENCIES_LIST[20];
    let expect = {iso3: 'BRL', isoNumeric: '986', name: 'Brazilian real', symbol: 'R$'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 60 of list `CURRENCIES_LIST`', function(assert) {
    let result = CURRENCIES_LIST[60];
    let expect = {iso3: 'HNL', isoNumeric: '340', name: 'Honduran lempira', symbol: 'L'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 90 of list `CURRENCIES_LIST`', function(assert) {
    let result = CURRENCIES_LIST[90];
    let expect = {iso3: 'MGA', isoNumeric: '969', name: 'Malagasy ariary', symbol: ''};
    assert.deepEqual(result, expect);
  });

  test('Check the element 130 of list `CURRENCIES_LIST`', function(assert) {
    let result = CURRENCIES_LIST[130];
    let expect = {iso3: 'SOS', isoNumeric: '706', name: 'Somali shilling', symbol: 'S'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 177 of list `CURRENCIES_LIST`', function(assert) {
    let result = CURRENCIES_LIST[177];
    let expect = {iso3: 'ZWL', isoNumeric: '932', name: 'Zimbabwean dollar A/10', symbol: ''};
    assert.deepEqual(result, expect);
  });
});

module('Unit | Utility | currencies list | CURRENCIES_PER_COUNTRY_LIST', function() {
  test('Check the length of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST.length;
    assert.equal(result, 261);
  });

  test('Check the element 0 of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST[0];
    let expect = {country: 'AE', currency: 'AED'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 20 of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST[20];
    let expect = {country: 'BD', currency: 'BDT'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 60 of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST[60];
    let expect = {country: 'AD', currency: 'EUR'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 90 of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST[90];
    let expect = {country: 'SK', currency: 'EUR'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 150 of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST[150];
    let expect = {country: 'MY', currency: 'MYR'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 200 of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST[200];
    let expect = {country: 'TZ', currency: 'TZS'};
    assert.deepEqual(result, expect);
  });

  test('Check the element 260 of list `CURRENCIES_PER_COUNTRY_LIST`', function(assert) {
    let result = CURRENCIES_PER_COUNTRY_LIST[260];
    let expect = {country: 'ZW', currency: 'ZWL'};
    assert.deepEqual(result, expect);
  });
});

module('Unit | Utility | currencies list | DEFAULT', function() {
  test('Check that the default import is exporting all the lists', function(assert) {
    let result = Object.keys(CURRENCIES_LIST_DEFAULT);
    let expected = [
      "CURRENCIES_LIST",
      "CURRENCIES_PER_COUNTRY_LIST"
    ];
    assert.deepEqual(result, expected);
  });
});
