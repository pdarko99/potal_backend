import { client } from "../config/db.js";

const getDataLogic = async () => {
  try {
    await client.connect();
    const result = await client.query("SELECT * FROM registration");
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    await client.end();
  }
};

export { getDataLogic };
