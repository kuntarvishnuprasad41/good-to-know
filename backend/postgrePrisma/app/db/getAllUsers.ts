import client from "./connection";

export const getAllUsers = async () => {
  return await client.query("SELECT * FROM users");
};
