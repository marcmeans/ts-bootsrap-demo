import * as chai from 'chai';
import * as request from 'request-promise';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { logger, LogLevel } from 'ts-bootstrap';
import { TSBNotFoundException } from 'ts-bootstrap/dist/lib/exception';
import { studentDb } from './data/student.mssql';
import { StudentService } from './student.service';

describe('StudentService', async () => {

	let _classUnderTest: StudentService;
	let assert = sinon.assert;
	let expect = chai.expect;
	chai.should();
	chai.use(sinonChai);

	describe('getStudents', async () => {
		let _mockResults;
		let _mockData;

		beforeEach(() => {
			_mockData = [];
			_mockResults = {
				input: sinon.spy(),
				query: sinon.stub().returns(Promise.resolve(_mockData))
			};
			studentDb.getConnectedRequest = sinon.stub().returns(_mockResults);
			logger.log = sinon.spy();

			_classUnderTest = new StudentService();
		});

		it('should call getConnectedRequest', async () => {
			await _classUnderTest.getStudents();

			assert.calledOnce(<sinon.SinonSpy>studentDb.getConnectedRequest);
		});

		it('should use query on the request with a correct sql statement', async () => {

			await _classUnderTest.getStudents();

			assert.calledWith(<sinon.SinonSpy>_mockResults.query,
				`SELECT name, age, grade FROM Students`
			);
		});

		it('should return results from query', async () => {
			let results = await _classUnderTest.getStudents();

			expect(results).to.be.deep.equal(_mockData);
		});

		it('should catch exceptions log and rethrow not found exepction', async () => {
			let localErr = { fake: 'error'};
			studentDb.getConnectedRequest = sinon.stub().throws(localErr);

			try {
				await _classUnderTest.getStudents();
			} catch (err) {
				expect(logger.log).to.be.calledWith(LogLevel.error, 'Fake caught error', localErr);
				expect(err).to.deep.equal(new TSBNotFoundException('foo', 'Data Failure', localErr));
			}

		});

	});

});