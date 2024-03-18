import { createConnection } from 'mysql';

const connection = createConnection({
  host: "localhost",
  user: "root",
  password: 1216,
  database: "Model"
});



const name = 'Jung breads'
const age = 31;

// ! 1. 매개변수 사용
// const query = `INSERT INTO users (name,age) values(?,?)`;
// // 쿼리에 담아 리터럴 하는 것이 마음에 들지 않아 다른 방법을 찾아봐야겠다.

// connection.query(query, [name, age], (err, result) => {
//   // 해당 query(query가 너무 단순하다는 것이 깊이가 좀더 필요하다.)
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("data created successfully");
//   }
// });

// connection.end();


//! 2. Prepared Statements
// const preparedStatement = connection.prepareStatement(
//   // prepareStatement는 데이터베이스 서버에 쿼리를 미리 컴파일하고 나중에 매개변수와 함께 실행할 수 있는 기능을 제공하는 메서드이다.(장점으론 성능향상, 보안강화, 코드 간결화가 있다)
//   `Insert Into users (name, age) values (?,?)`,
//   // 리터럴 사용함.(사용안하는 방향을 다시 찾아봐야함.)
// );

// preparedStatement.execute([name,age], (err,result) => {
//   if(err) {
//     console.error(err);
//   }else{
//     console.log("data created successfully!")
//   }
// });

// preparedStatement.close();
// connection.end();

// ! 템플릿 리터럴을 사용하지 않는 쿼리문
// ? 1. 문자열 연결
// const query = "Insert Into users(name, age) values ('" + name + "'," + age + ")";

// ! concat() 함수 사용
// const query = "Insert Into users (name, age) values (".concat(name, ".", age, ")");
// // concat은 두개 이상의 배열을 연결하여 하나의 새로운 배열을 반환하는 함수이다.

// ! ES6 백틱 문자열
// const query = `Insert into users (name, age) values ('${name}','${age}')`;