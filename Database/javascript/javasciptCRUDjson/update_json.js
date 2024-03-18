export function updateJson(updateFunc) {
  try {
    const jsonData = require('fs').readFileSync(filePath, 'utf-8');
    // JSON 데이터 파싱
    const data = JSON.parse(jsonData);

    updateFunc(data)

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

function updateAge(data) {
  const index = data.findIndex((item) => item.name === 'jung');
  if (index !== -1) {
    data[index].age = 31;
  }
}
updateJson(updateAge)