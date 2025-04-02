let x = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let y = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

document.addEventListener("keydown", function(e) {

  const bomberman = document.querySelector("#bomberman");
 
  console.log(e.key);
  
  switch(e.key) {
    case 'ArrowUp' : y -= 10; break;
    case 'ArrowDown' : y += 10; break;
    case 'ArrowLeft' : x -= 10; break;
    case 'ArrowRight' : x += 10; break;
    
    case 'x' : 
      const box = document.querySelector("#box");
      box.innerHTML +=
      `<img src="../../images/bomb.png"
        class="bomb"
        style="transform: translate(${x}px, ${y}px);
        position:absolute">`; // position:absolute 있어야 함
    break;
    
    case 'z' : explodeBomb(); break;

    default : alert("방향키, z, x만 가능");

  }



  bomberman.style.transform = `translate3d(${x}px, ${y}px, 0)`;

});

const explodeBomb = () => {
  const bombs = document.querySelectorAll(".bomb");
  // bombs 유사배열 형태

  // for .. of 문 : 
  // 배열같은 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
  // 향산된 for 문, for(타입 변수명 : 순회할 객체 or 배열)
  for(let bomb of bombs) {
    bomb.src = "../../images/boomm.png"
  }
}
// 'x'라는 키를 누르면 box에 innerHTML += '<img 폭탄>'
// box.innerHTML += .. 을 실행하는 과정에서 DOM 리렌더링됨.
// 기존에 bomberman을 가리키던 const bomberman = document.querySelector("#bomberman")
// 더이상 유효하지 않은 변수가 됨.
// bomberman.style.transform = 변경된 좌표;
// 기존 변수인 bomberman은 더이상 유요한 DOM 요소가 아니기 떄문에 스타일 변경이 적용 X
