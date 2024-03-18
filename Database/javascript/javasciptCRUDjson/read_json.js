// JSON 데이터를 읽는 함수
export function readJson() {
  try {
    // JSON 파일 읽기
    const jsonData = require('fs').readFileSync(filePath, 'utf-8')
    // JSON 데이터 파싱
    const data = JSON.parse(jsonData);
    // 파싱 데이터 반환(반환을 통한 파일 출력)
    return data;
  } catch (err) {
    // 값이 없을 때의 null값을 반환
    if (err.code === 'ENOENT') {
      return null;
    } else {
      throw err;
    }
  }
}