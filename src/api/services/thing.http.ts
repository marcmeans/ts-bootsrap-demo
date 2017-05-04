import * as request from 'request-promise';
import { WebRequest } from 'ts-bootstrap';

export interface IThing {
	foo: string;
	loo: number;
	coo: boolean;
}

export class ThingService {

	public async getThings(): Promise<IThing[]> {

		let req = new WebRequest(                          // WebRequest used for base call building
			process.env.THING_SERVICE_URL + '/v1/things',  // url for http call
			undefined);                                    // event object for initiating call

		let response = await request.get(req);

		return response;
	}

}

export const thingService = new ThingService();