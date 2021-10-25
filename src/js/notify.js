import { alert, notice, info, success, error } from '@pnotify/core';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/mobile/dist/PNotifyMobile.css';

// defaultModules.set(PNotifyMobile, {});

export function setAlertMsg() {
  alert({
    text: 'Enter correct country name',
    delay: 2000,
  });
}
export function setErrorMsg() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 2000,
  });
}

export function setNoticeMsg() {
  notice({
    text: 'No data for search',
    delay: 2000,
  });
}
