import { pool } from '../database.js';

export default class UserService {
    async getUsers() {
        let sql = 'SELECT * FROM users';
        const [result] = await pool.query(sql);
        return result;
}
    async insertUser(user) {
        let sql = 'INSERT INTO users SET ?';
        const [result] = await pool.query(sql, user);
        return result;
    }
}