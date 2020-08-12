const connection = require("../mysql_connection");

// @desc 모든 할일 조회
// @routes GET api/v1/todo
// @reqeust limit , offset
// @response success ,cnt
exports.Alltodo = async (req, res, next) => {
  let offset = req.query.offset;
  let limit = req.query.limit;
  let query = `select * from todo limit ${offset},${limit}`;

  try {
    [rows] = await connection.query(query);
    res.status(200).json({ success: true, msg: rows, cnt: rows.length });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};
