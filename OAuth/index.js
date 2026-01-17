// Импортируем нужные функции из SDK 2026 года
const urlParamsV2Paramsd = new URLSearchParams(window.location.search);
const access_token = urlParamsV2Paramsd.get('access_token');


if (access_token) {
  addTextToDb(access_token));
} else {
  alert('No Logined!!!');
}
