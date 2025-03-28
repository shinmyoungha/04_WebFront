// prompt 사용 연습

function test() {

  const password = prompt("비밀");

  console.log(password);

  // 확인 -> 입력한 값이 문자열로 저장
  // 취소 -> null

  if (password == null) { // 취소
    alert("취소");

  } else { // 확인

    if (password == '1234') {
      alert("비밀번호 일치")
    } else {
      alert("비밀번호 불일치!")

    }

  }

}

// ------------------------------------------------------

const output = document.getElementById("output"); // 잔액 출력 span
const amount = document.getElementById("amount"); // 금액 작성 input

let balance = 10000; // 잔액 기록 변수 (초기값 10000)
const pw = '1234'; // 비밀번호 저장 변수(비밀번호 1234)

output.innerText = balance; // 초기 금액 화면 출력

// 입금 함수
function deposit() {
  // input 에 입력된 금액 구하기
  console.log(amount.value.length);

  if (amount.value.length == 0) {
    alert("금액을 입력해주세요");

  } else {
    // 구한 금액을 잔액(balance)에 누적
    balance += Number(amount.value);
    // balance = balance + Number(amount.value);
    output.innerText = balance;
    // 화면에 잔액 업데이트
    amount.value = '';
  }

}

// 출금 함수
function withdrawal() {
  console.log(amount.value.length);

  if (amount.value.length == 0) {
    alert("금액을 입력해주세요");

  } else {

    const password = prompt('비밀번호를 입력하세요');

    if (password == null) { // 취소 버튼 누름
      alert("취소");
    } else { // 확인 버튼 누름

      // 비밀번호가 일치하지 않는 경우
      if (password != pw) {
        alert("비밀번호가 일치하지 않습니다");
      } else { // 일치하는 경우

        const money = Number(amount.value);

        // 출금할 금액이 잔액 보다 큰 경우
        if (money > balance) {
          alert("출금 금액이 잔액보다 클 수 없습니다")

        } else { // 출금할 금액이 잔액보다 작거나 같은 경우

          balance -= money;
          // balance = balance - money;
          output.innerText = balance;
          amount.value = '';

          // alert(amount.value + "원이 출금되었습니다. 남은금액 : " + balance)
          alert(`${money}원이 출금되었습니다. 남은 잔액 : ${balance}`);
          // 템플릿 리터럴
          // 백틱(``)을 사용하여 문자열을 감싸고,
          // %{} 안에 변수를 넣어 동적으로 문자열을 생성하는 방식
        }
      }
    }
  }
}