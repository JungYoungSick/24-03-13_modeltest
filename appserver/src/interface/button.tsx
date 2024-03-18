// 버튼 클릭 시 데이터가 업데이트 된다.
//! 데이터가 실시간으로 업데이트 되도록 하는 방법은 무엇일까?
export interface updateButton {
  // databases: //버튼 내용을 추가한다.
  onClick: () => void; // 버튼클릭 말고 자동 업데이트를 찾아보자.
}

// 버튼 클릭 시 데이터가 삭제된다.
export interface deleteButton {
  // databases: //버튼 내용을 추가한다.
  onClick: () => void;
}
