import client from "./connection";
import { User } from "../types/types";

export const addUser = async (newUser: User) => {
  try {
    const query = `
      INSERT INTO users (username, email, password) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;

    const values = [newUser.username, newUser.email, newUser.password];

    const result = await client.query(query, values);

    console.log(result);

    return result.rows[0]; // Return the inserted user data
  } catch (error: any) {
    // Handle specific error codes
    if (error.code === "23505") {
      // 23505 is the error code for unique violation in PostgreSQL
      throw new Error("User already exists with this username or email");
    }

    console.error("Failed to add user:", error);
    throw new Error("Failed to add user");
  }
};
