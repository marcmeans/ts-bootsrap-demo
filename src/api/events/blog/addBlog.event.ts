import * as Joi from 'joi';
import { IBaseHeader } from 'ts-bootstrap';

export interface IAddBlogEvent {
	title: string;
}

export const addBlogEvent = {
	title: Joi.string().required()
};