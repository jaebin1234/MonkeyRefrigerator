//UserDao.js
const response = require("../utils/response");
const { pool } = require("../config/database");

module.exports = {
  selectUserAccount: async function (email, pw) {
    try {
      const query = `SELECT * FROM useraccount WHERE email='${email}' and password='${pw}';`;
      const connection = await pool.getConnection(async (conn) => conn);
      console.log(connection.query(query));
      const [info] = await connection.query(query);
      connection.release();
      return info;
    } catch (err) {
      return res.json(
        response.successFalse(
          3001,
          "데이터베이스 연결에 실패하였습니다. UserDao error - selectUserAccount"
        )
      );
    }
  },
};
