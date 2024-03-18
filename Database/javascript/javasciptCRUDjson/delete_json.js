// ! JSON 데이터를 삭제하는 함수
export function deleteJson(deleteFunc) {
  try {
    const jsonData = require('fs').readFileSync(filePath, 'utf-8');
    // 데이터 파서에 담기
    const data = JSON.parse(jsonData);

    // 삭제할 파일 실행.
    deleteFunc(data)

    const updatedData = JSON.stringify(data, null, 4);
    require('fs').writeFileSync(filePath, updatedData);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('파일을 찾을 수 없습니다.');
    } else {
      console.error(err)
    }
  }
}

// ! 일부값 데이터를 삭제하는 방법.
function deleteByName(data) {
  const index = data.findIndex((item) => item.name === 'jung');
  if (index !== -1) {
    data.splice(index, 1);
  }
}

// ? deleteJson 함수 실행
deleteJson(deleteByName);