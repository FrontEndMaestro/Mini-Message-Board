const pool = require("./pool");

async function getMessageDetails(messageId) {
  console.log(messageId);
  const { rows } = await pool.query("select * from messages where id=$1", [
    messageId,
  ]);
  return rows[0];
}

async function getAllMessages() {
  const { rows } = await pool.query("select * from messages");
  return rows;
}

async function createMessage(username, message, added) {
  await pool.query(
    "insert into messages (username,text,added) values ($1,$2,$3)",
    [username, message, added],
  );
}

module.exports = {
  getMessageDetails,
  getAllMessages,
  createMessage,
};
