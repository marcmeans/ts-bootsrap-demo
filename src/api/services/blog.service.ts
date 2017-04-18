import { logger, LogLevel } from 'ts-bootstrap';
import { IAddBlogEvent } from '../events/blog/addBlog.event';

export class BlogService {

	public async addBlog(event: IAddBlogEvent): Promise<void> {
		// do something
	}
}

export const blogService = new BlogService();