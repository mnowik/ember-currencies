import Em from 'ember';
import { CURRENCIES_LIST, CURRENCIES_SYMBOLS_LIST, CURRENCIES_PER_COUNTRY_LIST } from './currencies-lists';
import { getFormat, buildIndex } from './helpers';

const {
  isNone
} = Em;

let indexedByIso3;
let indexedByIsoNumeric;


export function getCurrency(value) {
  let valueFormat = getFormat(value);
  if (valueFormat === null) {return;}

  let listIndexed = _getCurrenciesListIndexed(valueFormat);
  let selectedCountry = listIndexed[value.toUpperCase()];

  if (!isNone(selectedCountry)) {
    return selectedCountry;
  }
}


// export function getCurrencySymbol(value) {

// }


// export function getCurrencyOfCountry(value) {

// }


function _getCurrenciesListIndexed(code) {
  let index = {};
  if (code === 'iso3') {
    index = buildIndex(CURRENCIES_LIST, code, indexedByIso3);
    indexedByIso3 = index;
  } else if (code === 'isoNumeric') {
    index = buildIndex(CURRENCIES_LIST, code, indexedByIsoNumeric);
    indexedByIsoNumeric = index;
  }
  return index;
}