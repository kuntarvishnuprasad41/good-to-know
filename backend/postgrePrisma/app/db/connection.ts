import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "Admin@123",
});

try {
  client.connect();
  console.log("Connected to the database");
} catch (error) {
  console.log(error);
}

export default client;
