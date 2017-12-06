import { BaseDao } from "../base-dao";
import { pool } from "../pool";

export class UserDao extends BaseDao {
  constructor(pool) {
    super(pool, "users");
  }
}

export const userDao = new UserDao(pool);
