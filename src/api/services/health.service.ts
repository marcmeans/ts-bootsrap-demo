import fs = require('fs');
import { logger, LogLevel } from 'ts-bootstrap';

export class HealthService {

	private _pkg: { version: string };

	public async getHealth(): Promise<string> {

		this._pkg = this._pkg || JSON.parse(fs.readFileSync('package.json', 'utf8'));
		logger.log('health', LogLevel.info, 'health checked');
		return 'Version: ' + this._pkg.version + ' | OK';

	}

}
export const healthService = new HealthService();