import MyName from '../consts/MyName';
import * as E2E from './AppE2ETest';

describe('Navigation', () => {
	E2E.setupBeforeAndAfter();

	test('Navigate to default app page', async () => {
		await E2E.page.goto(E2E.mainURL);
		const selector = "[data-testid='name-link']";
		await E2E.page.waitForSelector(selector);
		const name = await E2E.page.$eval(selector, e => e.textContent);
		expect(name).toEqual(MyName);
	});

	describe('Personal page navigation', () => {
		test('Navigate to personal page from seeker page', async () => {
			await E2E.page.goto(E2E.mainURL);
			await Promise.all([
				E2E.page.click("[data-testid='personal-link']"),
				E2E.page.waitForNavigation({waitUntil: 'networkidle2'}),
			]);
			expect(E2E.page.url()).toEqual(E2E.personalURL);
		});

		test('Navigate to personal page directly', async () => {
			const response = await E2E.page.goto(E2E.personalURL);
			E2E.verifyResponse(response, E2E.OK);
			expect(response!.ok()).toEqual(true);
		});
	});

	describe('Reloading personal page', () => {
		test('Successfully reload personal page (cached)', async () => {
			await E2E.page.goto(E2E.personalURL);
			const response = await E2E.page.reload();
			E2E.verifyResponse(response, E2E.NOT_MODIFIED);
		});

		test('Successfully hard-reload personal page (not cached)', async () => {
			await Promise.all([
				E2E.page.goto(E2E.personalURL),
				E2E.page.setCacheEnabled(false),
			]);
			const response = await E2E.page.reload();
			E2E.verifyResponse(response, E2E.OK);
			expect(response!.ok()).toEqual(true);
		});
	});
});
