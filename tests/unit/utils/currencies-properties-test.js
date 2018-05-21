import {
  getCurrency,
  getCurrenciesForCountry
} from 'ember-currencies';
import { module, test } from 'qunit';

module('Unit | Utility | currencies properties | getCurrency', function() {
  test('Test with `EUR`', function(assert) {
    let result = getCurrency('EUR');
    let expect = {iso3: 'EUR', isoNumeric: '978', name: 'Euro', symbol: '€'};
    assert.deepEqual(result, expect);
  });

  test('Test with `USD`', function(assert) {
    let result = getCurrency('USD');
    let expect = {iso3: 'USD', isoNumeric: '840', name: 'United States dollar', symbol: '$'};
    assert.deepEqual(result, expect);
  });

  test('Test with `840`', function(assert) {
    let result = getCurrency('840');
    let expect = {iso3: 'USD', isoNumeric: '840', name: 'United States dollar', symbol: '$'};
    assert.deepEqual(result, expect);
  });

  test('Test with `usd`', function(assert) {
    let result = getCurrency('usd');
    let expect = {iso3: 'USD', isoNumeric: '840', name: 'United States dollar', symbol: '$'};
    assert.deepEqual(result, expect);
  });

  test('Test with incorrect iso', function(assert) {
    let result = getCurrency('AAA');
    assert.equal(result, undefined);
  });

  test('Test with `""` input', function(assert) {
    let result = getCurrency('');
    assert.equal(result, undefined);
  });

  test('Test with `null` input', function(assert) {
    let result = getCurrency(null);
    assert.equal(result, undefined);
  });

  test('Test with `undefined` input', function(assert) {
    let result = getCurrency(undefined);
    assert.equal(result, undefined);
  });

  test('Test with wrong isoNumeric `number` input', function(assert) {
    let result = getCurrency(3);
    assert.equal(result, undefined);
  });
});

module('Unit | Utility | currencies properties | getCurrenciesForCountry', function() {
  test('Test with `US` input', function(assert) {
    let result = getCurrenciesForCountry('US');
    let expect = [
      {iso3: 'USD', isoNumeric: '840', name: 'United States dollar', symbol: '$'},
      {iso3: 'USN', isoNumeric: '997', name: 'United States dollar (next day) (funds code)', symbol: ''},
    ];
    assert.deepEqual(result, expect);
  });

  test('Test with `UMI` input', function(assert) {
    let result = getCurrenciesForCountry('FR');
    let expect = [{iso3: 'EUR', isoNumeric: '978', name: 'Euro', symbol: '€'}];
    assert.deepEqual(result, expect);
  });

  test('Test with wrong country `AA` input', function(assert) {
    let result = getCurrenciesForCountry('AA');
    assert.deepEqual(result, []);
  });

  test('Test with `null` input', function(assert) {
    let result = getCurrenciesForCountry(null);
    assert.deepEqual(result, []);
  });

  test('Test with `""` input', function(assert) {
    let result = getCurrenciesForCountry('');
    assert.deepEqual(result, []);
  });

  test('Test with `undefined` input', function(assert) {
    let result = getCurrenciesForCountry(undefined);
    assert.deepEqual(result, []);
  });

  test('Test with `number` input', function(assert) {
    let result = getCurrenciesForCountry(3);
    assert.deepEqual(result, []);
  });
});
