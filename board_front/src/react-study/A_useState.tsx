import React, { useState } from 'react'

// 컴포넌트 생성 단축키 : rfc / rfce
// 리액트 함수형 컴포넌트 생성 단축키
//! useState 사용법
// 함수형 컴포넌트에서 상태 관리를 해주는 hook 3가지
// 1. hook 이란 (갈고리?)
// 리액트 함수형 컴포넌트에서 사용할 수 있는 기능을 모음
// 문법 체계가 사용한다 use-로 시작한다. use 쓰면 hook을 쓴다고 보면 된다.
// useState는 중괄호 안에서만 상태관리 가능함. 다른 파일로 가져갈 수 없음
// 
// const [state,setState] = useState<타입>(초기값);
// 구조분해 할당 이란
// 배열이나 객체의 속성을 변수로 쉽게 추출할 수 있도록 하는 기능이다.
// ex)
// const [a,b] = [1,2];
// const {name , age} = {
//   name : "이승아",
//   age : 30
// };

// const a = 0;
// const name = "이도경";
// 배열과, 객체가 좌항과 우항이 같으면 
// useState 의 리턴값은
// : [상태 변수, 상태 업데이트 함수]
// 왼쪽은 변수, 오른쪽은 함수
// const 상태변수 = 초기값;
// const setState() {
// const 상태업데이트 함수 = () => {
//}


function A_useState() {
  const [count, setCount] = useState<number>(0);
  // count 는 변수명
  // setCount 는 함수명
  
  // React 의 치계
  // TSX 문법 치계
  // TS 내에서 HTML
  // 함수형 컴포넌트의 반환을 HTML 문서로 반환시킴
  // 여기서 이해해야되는 부분이
  // TS 내에서 HTML 작성을 () 소괄호로 묶고
  // HTML 내에서 TS 작성을 {} 중괄호로 묶는다.

  const handleIncrementButton = () => {
    // set 상태 설정함수에 전달되는 인자값으로 count 값이 업데이트된다.
    // 이전의 상태와 연관이 없는 경우 : 
    // setCount(count + 1);

    // prev상태면수명
    // 최신의 상태변수값을 가져옴
    // 이전 상태와 연관이 있는 경우는 : 
    setCount(prevCount => prevCount + 1);
  }
  return (
    <>
      <div>A_useState</div>
      <p>Count : {count}</p>
      <button onClick={handleIncrementButton}>증가 버튼</button>
    </>
  )
}

export default A_useState