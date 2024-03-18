// JSON 데이터를 읽는 함수
export function readJson() {
  try {
    // JSON 파일 읽기
    const jsonData = require('fs').readFileSync(filePath, 'utf-8')
    const data = JSON.parse(jsonData);
    return data;
  } catch (err) {
    if (err.code === 'ENOENT') {
      return null;
    } else {
      throw err;
    }
  }
}