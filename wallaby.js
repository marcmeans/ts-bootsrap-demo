module.exports = function (wallaby) {
	return {
		files: [
			'src/**/*.ts',
			'!src/**/*.spec.ts',
			{ pattern: 'package.json', instrument: false },
			{ pattern: './local.env', instrument: false }
		],

		filesWithNoCoverageCalculated: [
			'src/app.ts',
			'src/api/apiRouteBuilder.ts',
			'src/**/*.rabbit.ts',
			'src/**/*.database.ts',
			'src/**/*.mssql.ts',
			'src/bootstraplib/**/*.ts'
		],

		tests: [
			'src/**/*.spec.ts'
		],

		env: {
			type: "node"
		},

		setup: function (wallaby) {
			require('env2')('local.env');
		},

		testFramework: 'mocha',
		compilers: { '**/*.ts': wallaby.compilers.typeScript() },
		workers: { recycle: true }
	};
};
