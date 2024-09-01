const setCookieButton = document.querySelector('#set-cookie');
const deleteCookieButton = document.querySelector('#delete-cookie');

// Axios HTTP 클라이언트에서 CORS 요청을 보낼 때 쿠키와 인증 헤더를 포함하도록 설정하는 방법
// 이 설정을 통해 클라이언트가 다른 도메인으로 요청을 보낼 때 쿠키를 자동으로 전송할 수 있다
axios.defaults.withCredentials = true;

setCookieButton.onclick = () => {
  axios.get('http://localhost:3000')
    .then(res  => console.log(res))
}

deleteCookieButton.onclick = () => {
  axios.delete('http://localhost:3000')
    .then(res  => console.log(res))
}