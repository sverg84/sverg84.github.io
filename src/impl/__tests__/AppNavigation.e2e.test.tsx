import puppeteer, { Browser, Page } from 'puppeteer';

import MyName from '../consts/MyName';

describe('Navigation', () => {
	const mainURL = "http://localhost:3000";
	const personalURL = `${mainURL}/personal`;
	let browser: Browser;
	let page: Page;

	beforeAll(async () => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
	});

	test('Navigate to default app page', async () => {
		await page.goto(mainURL);
		const selector = "[data-testid='name-link']";
		await page.waitForSelector(selector);
		const name = await page.$eval(selector, e => e.textContent);
		expect(name).toEqual(MyName);
	});

	describe('Personal page navigation', () => {
		test('Navigate to personal page from seeker page', async () => {
			await page.goto(mainURL);
			await Promise.all([
				page.click("[data-testid='personal-link']"),
				page.waitForNavigation({waitUntil: 'networkidle2'}),
			]);
			expect(page.url()).toEqual(personalURL);
		});

		test('Navigate to personal page directly', async () => {
			const response = await page.goto(personalURL);
			expect(response?.ok()).toEqual(true);
			expect(response?.status()).toEqual(200);
		});
	});

	describe('Reloading personal page', () => {
		test('Successfully reload personal page (cached)', async () => {
			await page.goto(personalURL);
			const response = await page.reload();
			expect(response?.status()).toEqual(304); // HTTP Not Modified: OK but Cache-Hit
		});

		test('Successfully hard-reload personal page (cached)', async () => {
			await Promise.all([
				page.goto(personalURL),
				page.setCacheEnabled(false),
			]);
			const response = await page.reload();
			expect(response?.ok()).toEqual(true);
			expect(response?.status()).toEqual(200);
		});
	});

	afterAll(() => browser.close());
});
