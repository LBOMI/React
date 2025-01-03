## 구현
 * 감소하는 초 카운트다운을 구현하기 위해 "setInterval"이라는 함수를 사용하였다.
   * setInterval -> 매 시간 동안 브라우저와 통신하는 함수이다. 이를 이용하면 시간이 바뀌는 화면을 구현할 수 있다.
 * '00:00:00'의 형태로 만들기 위해 'useState(10 * 60 * 60)'로 시간을 초 단위로 변환하였다.
 * 타이머 종료 조건 -> `setCount` 내부에서 `prevCount`가 0 이하인지 확인하고, 타이머를 중지한다.
 * 시간 포맷팅 -> `formatTime` 함수를 만들어 초 단위를 'hh:mm:ss' 형식으로 변환하였다.

### 참고
https://velog.io/@choco1drink/React-%EA%B0%90%EC%86%8C%ED%95%98%EB%8A%94-%EC%B4%88-%EC%B9%B4%EC%9A%B4%ED%8A%B8-%ED%83%80%EC%9D%B4%EB%A8%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
