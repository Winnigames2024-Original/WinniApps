const urlParamsllJhfds = new URLSearchParams(window.location.search);
const codDeE = urlParamsllJhfds.get('code');

if (codDeE) {
  if (codDeE == "captcha-verified") {
    window.location.href = "captchaVerified";
  }
}
