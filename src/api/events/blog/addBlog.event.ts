import * as Joi from 'joi';

export interface IAddBlogEvent {
	title: string;
	description: string;
	author: string;
}

export const addBlogEvent = {
	title: Joi.string().required(),
	description: Joi.string().required(),
	author: Joi.string().required()
};