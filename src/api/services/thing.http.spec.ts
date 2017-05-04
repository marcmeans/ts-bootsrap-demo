import * as chai from 'chai';
import * as request from 'request-promise';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { WebRequest } from 'ts-bootstrap/dist';
import { isUndefined } from 'util';
import { ThingService } from './thing.http';

describe('ThingService', async () => {

	let _classUnderTest: ThingService;
	let assert = sinon.assert;
	let expect = chai.expect;
	chai.should();
	chai.use(sinonChai);

	describe('getThings', async () => {

		beforeEach(() => {
			sinon.stub(request, 'get').returns([]);
			_classUnderTest = new ThingService();
		});

		afterEach(() => {
			(<sinon.SinonStub>request.get).restore();
		});

		it('should make request with web request', async () => {
			await _classUnderTest.getThings();

			expect(request.get).to.be.calledWith(new WebRequest(
				process.env.THING_SERVICE_URL + '/v1/things',
				undefined
			));

		});

	});

});