/** 설치하기
 * npm init -y // package.json 설치
 * npm i express // express 설치
 * npm i cors // cors 설치
 * npm i cookie-parser // cookie-parser 설치
 */

// 모듈 불러오기
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// express실행(서버 만들기)
const app = express();

// cors 초기설정
app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500'], // 내 컴퓨터 localhost
  methods: ['OPTIONS', 'GET', 'DELETE'],
  credentials: true
  /** credentials: true
   * 인증정보를 저장
   * 클라이언트 쪽에 쿠키를 저장 할 수 있다.
   */
}))


// cookie-parser는 서버에서 클라이언트가 보낸 쿠키를 쉽게 파싱하고 사용할 수 있도록 도와주는 미들웨어
app.use(cookieParser())

app.get('/', (req, res) => {
  res.cookie('test-cookie', 'my-cookie', {
    maxAge: 100000,
    httpOnly: true,
    secure: true
  })
  res.send('쿠키 생성 완료')
  /**
   * 첫번째 인자 - cookie의 이름
   * 두번째 인자 - cookie의 값
   * 세번째 인자 - cookie를 저장할 때 사용할 수 있는 옵션
   */

  /** res.cookie('test-cookie', 'my-cookie')
   * test-cookie라는 이름으로
   * my-cookie라는 문자열을 저장
   */

  /** res.cookie 세번째 인자.....
   * expires: 언제 만료 시킬건지 날짜를 지정
   * maxAge: 얼마나 지속될건지 지정
   * 
   * httpOnly: 웹 애플리케이션에서 쿠키를 보다 안전하게 관리하는 데 도움을 준다.
   * httpOnly 속성은 쿠키가 JavaScript를 통해 접근할 수 없도록 하여, 클라이언트 측 스크립트(예: JavaScript)로부터 쿠키를 보호
   * httpOnly 속성은 true로 설정하는걸 권장!!
   * 
   * secure는 쿠키의 보안을 강화하기 위한 설정 중 하나로, 쿠키가 HTTPS 연결을 통해서만 전송되도록 한다
   * 이를 통해 쿠키가 암호화되지 않은 HTTP 연결을 통해 전송되는 것을 방지
   * secure 속성은 true로 설정하는걸 권장!!
   */
})

app.delete('/', (req, res) => {
  res.clearCookie('test-cookie', {
    httpOnly: true,
    secure: true
  })
  res.send('쿠키 삭제 완료')
})

app.listen(3000, () => console.log('서버 실행'))