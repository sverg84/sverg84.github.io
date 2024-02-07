const esModules = ['react-bootstrap', 'puppeteer'].join('|');

module.exports = {
	jest: config => {
		config.preset = 'ts-jest/presets/js-with-babel-esm';
		config.moduleNameMapper = {
			'^(\\.{1,2}/.*)\\.js$': '$1',
			'\\.scss$': '<rootDir>/node_modules/jest-css-modules',
			'puppeteer-core/internal/puppeteer-core.js':
				'<rootDir>/node_modules/puppeteer-core/lib/cjs/puppeteer/puppeteer-core.js',
			'puppeteer-core/internal/node/PuppeteerNode.js':
				'<rootDir>/node_modules/puppeteer-core/lib/cjs/puppeteer/node/PuppeteerNode.js',
		};
		config.transform = {
			[`(${esModules}).+\\.js$`]: 'babel-jest',
			'^.+\\.(js|jsx|mjs)$': 'babel-jest',
			'^.+\\.(ts|tsx)$': [
				'ts-jest',
				{
					isolatedModules: true,
					useESM: true,
				},
			],
		};
		config.transformIgnorePatterns = [`/node_modules/(?!(${esModules})/).*/`];
		return config;
	},
};
