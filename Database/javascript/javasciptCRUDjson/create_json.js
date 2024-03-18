const filePath = 'example.json';

// Json 데이터
const data = {
  name: 'jung',
  age: 31,
}
export function createJson(data) {
  const jsonData = JSON.stringify(data, null, 4);

  const fs = require('fs');
  // 파일 불러오기 형식을 사용.(파일시스템)
  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('JSON 파일 생성 성공!')
    }
  });
}

createJson(data);