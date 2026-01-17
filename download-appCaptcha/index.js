const urlParamsllJhfds = new URLSearchParams(window.location.search);
const codDeE = urlParamsllJhfds.get('code');

if (codDeE) {
  if (codDeE == "captcha-verified") {
    const redirectUrl = urlParamsllJhfds.get('redirect_url');
    window.location.href = redirectUrl;
  }
}
