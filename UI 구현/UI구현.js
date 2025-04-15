const box3 = document.querySelector("#box3");
const createBox = document.querySelector("#createBox"); // button

createBox.addEventListener("click", () => {

  // 1. div 요소 설정
  const box = document.createElement("div"); // <div></div>
  console.log(box);

  // 2. 만들어진 div 요소 "box" 클래스 추가
  box.classList.add("Button"); // <div class="box"></div>

  // 3. container의 마지막 자식으로 div요소 추가
  container.append(Button);

  // 4. input 요소 생성
  const input = document.createElement("input"); // <input>
  input.type = "text"; // <input type="text">

  // 5. 생성된 input 을 box의 마지막 자식으로 추가
  box.append(input);
});

box3.addEventListener("click", function() {

  // 다 같은 의미임
  // alert(`배경색 : ${this.style.backgroundColor}`) 
  // e.target : 이벤트가 발생한 대상 요소 == this
  alert(`배경색 : ${box3.style.backgroundColor}`)
});