const urlParamsllJhfds = new URLSearchParams(window.location.search);
const codDeE = urlParamsllJhfds.get('code');
const siteKey = urlParamsllJhfds.get('site-key');

if (codDeE) {
  if (codDeE == "captcha-verified") {
    const redirectUrl = urlParamsllJhfds.get('redirect_url');
    window.location.href = redirectUrl;
  }
}

if (siteKey) {
  const reCaptchaButtonDiv = document.getElementById('reCaptchaButton');
  reCaptchaButtonDiv.insertAdjacentHTML('beforeend', '<div class="g-recaptcha" data-sitekey="' + siteKey + '" data-callback="done"></div>');
}
