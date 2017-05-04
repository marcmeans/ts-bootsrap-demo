import { logger, LogLevel } from 'ts-bootstrap';
import { IAddBlogEvent } from '../events/blog/addBlog.event';
import { blog, IBlog } from '../models/blog.model';

export class BlogService {

	public async addBlog(event: IAddBlogEvent): Promise<void> {
		blog.create(<IBlog>{
			title: event.title,
			description: event.description,
			author: event.author
		});
	}
}

export const blogService = new BlogService();