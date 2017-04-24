import * as chai from 'chai';
import * as sinon from 'sinon';
import fs = require('fs');
import { logger, LogLevel } from 'ts-bootstrap';
import { HealthService } from './health.service';

describe('HealthService', async () => {

	let _classUnderTest: HealthService;
	let assert = sinon.assert;
	let expect = chai.expect;
	let _version: number;

	describe('getHealth', async () => {

		beforeEach(() => {

			logger.log = sinon.spy();
			_version = Math.floor(Math.random() * 100 + 1);
			fs.readFileSync = sinon.stub().returns('{ "version": "' + _version + '" }');

			_classUnderTest = new HealthService();
		});

		it('should get version from package.json', async () => {

			await _classUnderTest.getHealth();

			assert.calledOnce((<sinon.SinonStub>fs.readFileSync));
			assert.calledWith((<sinon.SinonStub>fs.readFileSync), 'package.json', 'utf8');

		});

		it('should return version text', async () => {

			let result = await _classUnderTest.getHealth();

			assert.calledWith((<sinon.SinonSpy>logger.log), LogLevel.info, 'health checked');
			expect(result).to.equal('Version: ' + _version + ' | OK');

		});

	});

});