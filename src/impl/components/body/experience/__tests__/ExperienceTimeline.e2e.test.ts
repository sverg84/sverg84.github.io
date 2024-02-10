import { ElementHandle } from 'puppeteer';

import * as E2E from '../../../../__tests__/AppE2ETest';

describe('Experience Timeline', () => {
	E2E.setupBeforeAndAfter();

	let timelineItem: ElementHandle<Element> | null;

	beforeEach(async () => {
		timelineItem = await genTimelineItem();
	});

	async function genTimelineItem(): Promise<ElementHandle<Element> | null> {
		await E2E.page.goto(E2E.mainURL);
		return await E2E.page.$("[data-testid='exp-item-meta_swe']");
	}

	async function genExpect(expected: boolean): Promise<void> {
		const [isIntersectingViewport, isVisible] = await Promise.all([
			timelineItem!.isIntersectingViewport(),
			timelineItem!.isVisible(),
		]);

		// Visible in the DOM !== visible in the viewport
		// Always visible in DOM, only intersecting upon 1st scroll
		expect(isIntersectingViewport).toBe(expected);
		expect(isVisible).toBe(true);
	}

	test('Timeline items not initially visible', async () => {
		expect(timelineItem).not.toBeNull();
		await genExpect(false);
	});

	test('Timeline item visible after intersection observer', async () => {
		await timelineItem!.scrollIntoView();
		await genExpect(true);
	});
});
