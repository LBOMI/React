## 특징
* 인기 검색어가 포함되어 있는 header의 nav 부분이 스크롤을 내리면 보이지 않다가 스크롤을 올리면 나타난다.

## 구현 방법
* State를 사용해 스크롤 방향 저장
  * `useState`를 이용해 현재 헤더가 보여야 하는지 여부를 관리한다.
  * `useRef`를 이용해 스크롤 위치를 추적한다.
  * `window.scrollY > lastScrollY.current`: 스크롤을 내릴 때 헤더 숨김.
  * `window.scrollY < lastScrollY.current`: 스크롤을 올릴 때 헤더 보임.
  * 스크롤이 맨 위까지 올라가지 않아도 헤더가 나타나도록 `currentScrollY`와 `lastScrollY`의 비교만 수행
  * `currentScrollY > 50` : 화면 맨 위에서 조금만 내려도 헤더가 숨겨지지 않도록 임계값 설정.
    
* 스크롤 이벤트 감지
  * `useEffect`를 사용해 `window.scroll` 이벤트를 추가한다.
  * 스크롤의 위치를 비교하여 헤더의 표시 여부를 업데이트한다.


