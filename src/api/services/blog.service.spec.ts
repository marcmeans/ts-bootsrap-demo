import * as chai from 'chai';
import * as request from 'request-promise';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import { logger, LogLevel } from 'ts-bootstrap';
import { Uuid } from 'ts-bootstrap/dist';
import { IAddBlogEvent } from '../events/blog/addBlog.event';
import { blog, IBlog } from '../models/blog.model';
import { BlogService } from './blog.service';

describe('BlogService', async () => {

	let _classUnderTest: BlogService;
	let assert = sinon.assert;
	let expect = chai.expect;
	chai.should();
	chai.use(sinonChai);

	describe('addBlog', async () => {

		let _event: IAddBlogEvent;

		beforeEach(() => {
			_event = {
				title: Uuid.new(),
				author: Uuid.new(),
				description: Uuid.new()
			};

			blog.create = sinon.spy();

			_classUnderTest = new BlogService();
		});

		it('should create new model', async () => {

			await _classUnderTest.addBlog(_event);

			expect(blog.create).to.have.been.calledWith({
				title: _event.title,
				author: _event.author,
				description: _event.description
			});
		});

	});

});