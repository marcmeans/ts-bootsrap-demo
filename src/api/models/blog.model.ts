import * as Joi from 'joi';
import * as joigooseLib from 'joigoose';
import * as mongoose from 'mongoose';
import { blogDb } from '../services/data/blog.mongo';
const JoiGoose = joigooseLib(mongoose);

// MODELS ARE TESTED IF THEY EXHIBIT BEHAVIOR

const BlogSchema = JoiGoose.convert({
	title: Joi.string().required(),
	description: Joi.string().required(),
	author: Joi.string().required()
});

export interface IBlog {
	title: string;
	description: string;
	author: string;
}

type BlogType = IBlog & mongoose.Document;

export const blog = blogDb.model<BlogType>('blog', BlogSchema);

