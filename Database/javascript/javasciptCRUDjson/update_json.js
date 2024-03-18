// ! JSON 데이터를 업데이트 하는 함수
export function updateJson(updateFunc) {
  try {
    // JSON 파일 읽기(readFileSync를 이용한 파일 읽기)
    const jsonData = require('fs').readFileSync(filePath, 'utf-8');
    // JSON 데이터 파싱
    const data = JSON.parse(jsonData);

    // 매개변수에 파싱된 데이터 읽기.(업데이트 파일 실행)
    updateFunc(data)

    // JSON 파일 쓰기
    const updatedData = JSON.stringify(data, null, 4);
    require('fs').writeFileSync(filePath, updatedData)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('파일을 찾을 수 없습니다.');
      createJson({})
    } else {
      throw err;
    }
  }
}

// ! 함수에서 값을 찾아 값 데이터 업데이트
export function updateAge(data) {
  const index = data.findIndex((item) => item.name === 'jung');
  if (index !== -1) {
    data[index].age = 31;
  }
}
updateJson(updateAge)