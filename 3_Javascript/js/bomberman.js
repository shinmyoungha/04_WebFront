let x = 0;
let y = 0;

document.addEventListener("keydown", function(e) {

  const bomberman = document.querySelector("#bomberman");
 
  switch(e.key) {
    case 'ArrowUp' : y -= 10; break;
    case 'ArrowDown' : y += 10; break;
    case 'ArrowLeft' : x -= 10; break;
    case 'ArrowRight' : x += 10; break;

    case 'x' : box = 
    console.log(e.key);

  }



  bomberman.style.transform = `translate3d(${x}px, ${y}px, 0)`;

  // 'x'라는 키를 누르면 box에 innerHTML += '<img 폭탄>'
  // box.innerHTML += .. 을 실행하는 과정에서 DOM 리렌더링됨.
  // 기존에 bomberman을 가리키던 const bomberman = document.querySelector("#bomberman")
  // 더이상 유효하지 않은 변수가 됨.
  // bomberman.style.transform = 변경된 좌표;
  // 기존 변수인 bomberman은 더이상 유요한 DOM 요소가 아니기 떄문에 스타일 변경이 적용 X
});
