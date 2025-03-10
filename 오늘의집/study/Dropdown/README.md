#### 특징
 + react 상태와 조건부 렌더링을 활용하여 nav바의 화살표 버튼을 누르면 아래로 열리는 드롭다운 메뉴

#### 구현
 * 드롭다운 외부를 클릭하면 닫히는 기능
   1. `useRef`를 사용하여 드롭다운 DOM 요소에 참조를 연결한다.
   2. `document.addEventListener`로 클릭 이벤트 감지
       - `mousedown` 이벤트를 사용하여 드롭다운 외부를 클릭했는지 확인한다.
   3. `contains` 메서드로 외부 클릭 확인
       - `dropdownRef.current.contains(event.target)`를 통해 클릭한 요소가 드롭다운 내부인지 확인한다.
   4. 이벤트 클린업
       - `useEffect`의 `return`에서 `removeEventListener`를 호출하여 컴포넌트가 언마운트될 때 이벤트 리스너를 정리하여 메모리 누수를 방지한다.
     
     ##### 트러블 슈팅
      - 드롭다운이 열린 상태에서 버튼을 누르면 닫히지 않는 오류 발생
      - 원인 -> `handleClickOutside`로 드롭다운 외부를 클릭하면 닫히게 만들었는데, 이 기능 때문에 발생한 것이었다.
      - 해결 ->  버튼을 참조하는 로직을 추가하여 '드롭다운 외부'에 버튼을 제외시켰다.
