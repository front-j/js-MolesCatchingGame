# JavaScript로 두더지 잡기 게임 만들기
<img src=images/result.gif width=420px height=500px></img>

## review
#### 1. 게임 레이아웃
 - table태그를 사용하여 9개의 구멍 이미지를 넣어줌
 - css에서 미디어쿼리 `@media`를 추가하여 작은 화면에서는 게임 화면이 커지도록 조정
</br>

#### 2. 게임 타이머
 - 시작 버튼을 누르면 Start함수가 실행되고,
 ```javascript
 btn.addEventListener("click", Start);
 ```
  - Start함수가 실행되면 Timer함수가 실행된다. Timer함수는 `setTimeout`을 사용하여 일정 시간 이후 Stop함수가 실행되게 하여 게임을 종료시킨다.
 ```javascript
 function Timer() {
  window.setTimeout(Stop, 15000);
}
 ```
 </br>

#### 3. 두더지 생성
- Start함수 실행 시 `setInterval`를 사용하여 두더지 생성 함수 실행
- 두더지 생성은 `Math.random()`으로 랜덤하게 생성되도록 함 (1~9)
```javascript
 Math.floor(Math.random() * 9) + 1;
```
 </br>

#### 4. 두더지 클릭 시 이벤트 
- 생성된 두더지 이미지에 `class`를 target으로 넣어주고, target이 클릭 될 경우 Attack함수 실행
```javascript
target.addEventListener("click", Attack);
```
- Attack함수가 실행되면 두더지 이미지를 바꿔주고, SCORE를 증가시켜줌
```javascript
count++;
btn.innerHTML = "<div>SCORE:  " + count + "</div>"
```
- 게임화면 안에서는 css `cursor`속성에 뿅망치 이미지를 url로 넣어주고, `:active`를 이용하여 클릭 시 뿅망치를 내려치는 효과 구현 (cursor 이미지 삽입 시 36픽셀 이하)
 </br>

#### 5. 게임 종료
- 타이머가 종료되면 `setTimeout`으로 Stop함수를 실행시킴
- 게임 종료 시 게임화면에 점수를 알려주고, `onclick='location.reload()'`을 넣어 화면 클릭 시 새로고침이 됨
