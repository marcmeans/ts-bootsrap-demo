import * as mssql from 'mssql';
import { BaseSqlRequestFactory } from 'ts-bootstrap';

let connection = new mssql.Connection({
	user: process.env.SQL_STUDENT_USER,
	password: process.env.SQL_STUDENT_PASSWORD,
	server: process.env.SQL_STUDENT_SERVER,
	database: process.env.SQL_STUDENT_DATABASE,
	domain: process.env.SQL_STUDENT_DOMAIN,
	options: {
		encrypt: !process.env.SQL_STUDENT_ENCRYPT
	}
});
export const studentDb = new BaseSqlRequestFactory(connection);