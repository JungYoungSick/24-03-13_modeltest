// ! JSON 데이터를 삭제하는 함수
export function deleteJson(deleteFunc) {
  try {
    const jsonData = require('fs').readFileSync(filePath, 'utf-8');
    // 데이터 파서에 담기
    const data = JSON.parse(jsonData);

    // 삭제할 파일 실행.
    deleteFunc(data)
    // stringify를 통한 데이터 변환 
    const updatedData = JSON.stringify(data, null, 4);
    // 파일 시스템을 호출하여 파일 업데이터 진행. filePath는 파일을 업데이트 진행.
    require('fs').writeFileSync(filePath, updatedData);
    // 오류값을 찾아 반환시킨다.
  } catch (err) {
    // ENOENT는 Entity Not Found의 약자로 파일이나 디렉토리가 존재하지 않을 때 발생하는 오류를 칭함.
    if (err.code === 'ENOENT') {
      console.error('파일을 찾을 수 없습니다.');
    } else {
      console.error(err)
    }
  }
}

// ! 일부값 데이터를 삭제하는 방법.
function deleteByName(data) {
  // data에서 findIndex(배열매서드)를 통한 값을 찾는다.
  const index = data.findIndex((item) => item.name === 'jung');
  if (index !== -1) {
    // sqlice는 배열을 추가 또는 삭제할 때 사용하며, 현재는 삭제의 용도로 사용되었다.
    data.splice(index, 1);
  }
}

// ? deleteJson 함수 실행
deleteJson(deleteByName);