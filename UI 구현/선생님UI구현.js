// 적용하기 버튼 얻어오기
const applyBtn = document.querySelector("#apply-btn");

applyBtn.addEventListener("click", function () {

  // inpput 요소들을 모두 얻어오기

const boxWidth = document.querySelector("#box-width"); // 너비
const boxHeight = document.querySelector("#box-height"); // 높이
const fs = document.querySelector("#fs"); // 폰트크기

const fw = document.querySelector("[name='fw']:checked"); // 글씨 굵기

const fontColor = document.querySelector("#box-font-color"); // 글씨색
const bgColor = document.querySelector("#box-bg-color"); // 배경색

const row = document.querySelector("[name='align-row']:checked"); // 가로정렬
const col = document.querySelector("[name='align-col']:checked"); // 세로정렬

const content = document.querySelector("#content"); // 작성글

const box = document.querySelector("#box"); // 박스요소(대상)

<<<<<<< HEAD
// input 에 작성된 값에 따라 #box에 스타일 추가아아아아아아아아아아아
if (width.value.trim().length > 0) {
  box.style.width = width.value + "px";
}
if (height.value.trim().length > 0) {
  box.style.height = height.value + "px";
}
=======
  // input 에 작성된 값에 따라 #box에 스타일 추가아아아아아아아아아아아어아
>>>>>>> 581239475c0ee8f2e1e3599bc98000661de0516f

box.style.fontSize = fontSize.value + "px";

if (fontWeight != null) {
  box.style.fontWeight = fontWeight.value;
}

box.style.color = fontColor.value;
box.style.backgroundColor = backgroundColor.value;

box.style.justifyContent = horizon.value;
box.style.alignItems = vertical.value;

box.innerText = text.value;

});