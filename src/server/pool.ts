import { readFileSync } from "fs";
import { Pool } from "pg";

const {
  db: { host, port, name: database, user, password },
} = JSON.parse(readFileSync(`${__dirname}/../../config/default.json`, "utf8"));

export const pool = new Pool({ host, port, database, user, password });
