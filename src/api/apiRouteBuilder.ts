import { BaseRouter } from 'ts-bootstrap';
import { blogService } from './services/blog.service';
import { blogRabbit } from './services/data/blog.rabbit';
import { healthService } from './services/health.service';

export class ApiRouteBuilder extends BaseRouter {

	public bootstrap(): void {

		this.addRoute({
			verb: 'get',
			url: '/v1/health',
			service: healthService,
			method: 'getHealth',
			schema: {}
		});

		this.addRabbit({
			config: blogRabbit,
			service: blogService,
			method: 'addBlog',
			queue: 'fakeQ',
			key: '#',
			schema: {}
		});
	}

}
export const apiRouteBuilder = new ApiRouteBuilder();