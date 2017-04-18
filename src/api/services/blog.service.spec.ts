import * as chai from 'chai';
import * as request from 'request-promise';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { logger, LogLevel } from 'ts-bootstrap';
import { BlogService } from './blog.service';

describe('BlogService', async () => {

	let _classUnderTest: BlogService;
	let assert = sinon.assert;
	let expect = chai.expect;
	chai.should();
	chai.use(sinonChai);

	describe('addBlog', async () => {

		beforeEach(() => {

			_classUnderTest = new BlogService();
		});

		it('NOT_IMPLEMENTED', async () => {
			expect(true).equals(false);
		});

	});

});