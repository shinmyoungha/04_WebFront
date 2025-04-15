const input3 = document.querySelector("#input3");
const box3 = document.querySelector("#box3");

input3.addEventListener("keyup", function(e) {

  if(e.key == "Enter") {
    box3.style.backgroundColor = input3.value;
  }
});

box3.addEventListener("click", function() {

  // 다 같은 의미임
  // alert(`배경색 : ${this.style.backgroundColor}`) 
  // e.target : 이벤트가 발생한 대상 요소 == this
  alert(`배경색 : ${box3.style.backgroundColor}`)
});