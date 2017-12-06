export class BaseDao {
  constructor(protected pool, protected table) {
  }

  public select() {
    return this.pool.query(`select * from ${this.table}`, [])
      .then((result) => result.rows);
  }
  public insert(){
    return this.pool.query(`insert into ${this.table}`, [
      
    ])
      .then((result)=>result.rows);
      
  }
}
