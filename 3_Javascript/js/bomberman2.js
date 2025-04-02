let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수
const bomberman = document.getElementById("bomberman"); // 봄버맨 이미지

document.addEventListener("keydown", function(e) {
    console.log(bomberman.style.transform);

    switch(e.key) {
        case 'ArrowRight' : xindex += 10; break;
        case 'ArrowLeft' : xindex -= 10; break;
        case 'ArrowUp' : yindex -= 10; break;
        case 'ArrowDown' : yindex += 10; break;
        
        case 'x' :
            const box = document.getElementById("box");
            const bomb = document.createElement("img");
            bomb.src = "../../images/bomb.png";
            bomb.classList.add("bomb");
            bomb.style.transform = `translate(${xindex}px, ${yindex}px)`;
            bomb.style.position = "absolute";
            box.appendChild(bomb); // 기존 요소 유지하면서 폭탄 추가
            break;

        case 'z' : explodeBomb(); break;
        default:
            alert("방향키, z, x만 가능"); break;
    }

    bomberman.style.transform = `translate(${xindex}px, ${yindex}px)`;
});

const explodeBomb = () => {
    const bombs = document.querySelectorAll('.bomb');
    for(let bomb of bombs) {
        bomb.src = "../../images/boomm.png";
    }
}