import debounce from 'lodash.debounce';
import './sass/main.scss';
import countryTmpl from './templates/country.hbs';
import countryListTmpl from './templates/country-list.hbs';
import fetchCountries from './js/fetchCountries';
import { setErrorMsg, setAlertMsg, setNoticeMsg } from './js/notify';

const refs = {
  countryInput: document.querySelector('.country-input'),
  markupPlace: document.querySelector('.markup-container'),
};

refs.countryInput.addEventListener('input', debounce(searchCountry, 500));

function searchCountry() {
  const searchQuery = refs.countryInput.value;

  if (searchQuery === ' ') {
    return setNoticeMsg();
  }

  clearMarkupPlace();

  fetchCountries(searchQuery)
    .then(response => {
      if (response.status === 404) {
        return setAlertMsg();
      }
      renderCountries(response);
    })
    .catch(onFetchError);
}

function clearMarkupPlace(searchQuery) {
  if (!searchQuery) {
    return (refs.markupPlace.innerHTML = ' ');
  }
}

function renderCountries(country) {
  if (country.length === 1) {
    const markup = countryTmpl(country);
    refs.markupPlace.innerHTML = markup;
  } else if (country.length > 10) {
    return setErrorMsg();
    // alert('Too many matches found. Please enter a more specific query!');
  } else if (country.length > 1 && country.length <= 10) {
    const markup = countryListTmpl(country);
    refs.markupPlace.innerHTML = markup;
  }
}

function onFetchError(error) {
  alert(error);
}
