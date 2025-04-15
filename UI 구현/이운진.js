//적용 하기 버튼이 클릭 되었을때 
const applyBtn = document.querySelector("#apply-btn");

applyBtn.addEventListener("click",function(){

//input 요소들을 전부 얻어오기 아이디로
const width= document.querySelector("#width");//너비
const height= document.querySelector("#height");//높이
const fontSize= document.querySelector("#fontSize");//폰트 사이즈

//라디오 얻어오기 : 이부분 모르겠어서 선생님 코드
const fontWeight = document.querySelector("[name='fontWeight']:checked");//name속성값이 fw인데 radio 체크드!//글씨 굵기

const fontColor= document.querySelector("#fontColor");//글씨색
const backgroundColor=document.querySelector("#backgroundColor");//배경색

const horizon = document.querySelector("[name='horizon']:checked");//가로정렬
const vertical = document.querySelector("[name='vertical']:checked");//세로정렬

const text = document.querySelector("#text");//작성글

const box = document.querySelector("#box");//박스 요소 (대상)

//input 에 작성된 값에 따라 아이디가 box인 요소( #box) 에 스타일 추가 


//if문으로 예외처리 하기 ( 안해도 됨)
if(width.value.trim().length>0){
  box.style.width=width.value +"px";
}
if(height.value.trim().length>0){
box.style.height=height.value +"px";
}

box.style.fontSize = fontSize.value+"px";

if(fontWeight!=null){
  box.style.fontWeight = fontWeight.value;
}

box.style.color=fontColor.value;
box.style.backgroundColor=backgroundColor.value;

box.style.justifyContent=horizon.value;
box.style.alignItems=vertical.value;

box.innerText = text.value;

});