import { TSBNotFoundException } from 'ts-bootstrap/dist/lib/exception';
import { logger, LogLevel } from 'ts-bootstrap';
import { studentDb } from './data/student.mssql';

export interface IStudent {
	name: string;
	age: number;
	grade: number;
}

export class StudentService {

	public async getStudents(): Promise<IStudent[]> {
		try {
			let request = await studentDb.getConnectedRequest();
			let sqlResults = await request.query<IStudent>(
				`SELECT name, age, grade FROM Students`
			);

			return sqlResults;
		} catch (err) {
			logger.log(LogLevel.error, 'Fake caught error', err);
			throw new TSBNotFoundException('foo', 'Data Failure', err);
		}
	}
}

export const studentService = new StudentService();