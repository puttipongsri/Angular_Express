import { pool } from '../database.js';

export default class UserService {
    async getUsers() {
        let sql = 'SELECT * FROM users';
        const [result] = await pool.query(sql);
        return result;
}
async insertUser(username, hashedPassword) {
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const [result] = await pool.query(sql, [username, hashedPassword]);
    return result;
}
    async getUserByUsername(username) {
        let sql = `SELECT * FROM users WHERE username = '${username}'`;
  
        const [[user]] = await pool.query(sql);
  
        return user;
    }
}