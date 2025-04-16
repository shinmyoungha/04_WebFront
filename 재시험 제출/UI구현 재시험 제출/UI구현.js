// 적용하기 버튼 얻어오기
const applyBtn = document.querySelector("#apply-btn");

applyBtn.addEventListener("click", function() {

  // inpput 요소들을 모두 얻어오기

  const boxWidth = document.querySelector("#box-width"); // 너비
  const boxHeight = document.querySelector("#box-height"); // 높이
  const fs = document.querySelector("#fs"); // 폰트 크기

  const fw = document.querySelector("[name='fw']:checked"); // 글씨 굵기

  const fontColor = document.querySelector("#box-font-color"); // 글씨색
  const bgColor = document.querySelector("#box-bg-color"); // 배경색

  const row = document.querySelector("[name='align-row']:checked"); // 가로정렬
  const col = document.querySelector("[name='align-col']:checked"); // 세로정렬

  const content = document.querySelector("#content"); // 작성글

  const box = document.querySelector("#box"); // 박스요소(대상)

  // input 에 작성된 값에 따라 #box에 스타일 추가아아아아아아아아아아아어아d아아ㅏ앙

  if(boxWidth.value.trim().length > 0) {
    box.style.width = boxWidth.value + "px"; // 너비비
  }
  if(boxHeight.value.trim().length > 0) {
    box.style.height = boxHeight.value + "px"; // 높이이
  }

  box.style.fontSize = fs.value + "px"; // 폰트 크기

  if(fw != null){
    box.style.fontWeight = fw.value; // 글씨 굵기
  }

  box.style.color = fontColor.value; // 글씨색
  box.style.backgroundColor = bgColor.value; // 배경색
  box.style.display = "flex";

  box.style.justifyContent = row.value; // 가로정렬
  box.style.alignItems = col.value; // 세로정렬
  
  box.innerText = content.value; // 작성글

});