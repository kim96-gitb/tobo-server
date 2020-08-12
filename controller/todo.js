const connection = require("../mysql_connection");

// @desc 모든 할일 조회
// @routes GET api/v1/todo
// @reqeust limit , offset
// @response success ,cnt
exports.Alltodo = async (req, res, next) => {
  let offset = req.query.offset;
  let limit = req.query.limit;
  let query = `select * from todo limit ${offset},${limit}`;

  if (!offset || !limit) {
    res.status(500).json({ success: false, error: "경로가 이상합니다" });
  }

  try {
    [rows] = await connection.query(query);
    res.status(200).json({ success: true, msg: rows, cnt: rows.length });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};
// @desc 완료 여부 체크 및 해제
// @routes PUT api/v1/todo/update
// @reqeust
// @response success
exports.updatetodo = async (req, res, next) => {
  let id = req.body.id;
  let completed = req.body.completed;

  if (completed > 1) {
    res.status(500).json({ success: false, error: "잘못된 입력입니다" });
  }

  if (!id || !completed) {
    res.status(500).json({ success: false, error: "정보입력을 해주세요" });
  }

  let query = `update todo set completed = ${completed} where id = ${id}`;
  try {
    [result] = await connection.query(query);
    res.status(200).json({ success: true, msg: result });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};
