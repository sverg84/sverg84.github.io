import puppeteer, { Browser, HTTPResponse, Page } from "puppeteer";

export const NOT_MODIFIED = 304; // HTTP Not Modified: OK but Cache-Hit
export const OK = 200;

export const mainURL = "http://localhost:3000";
export const personalURL = `${mainURL}/personal`;

export let browser: Browser;
export let page: Page;

export function verifyResponse(
  response: HTTPResponse | null,
  status: number,
): void {
  expect(response).not.toBeNull();
  expect(response!.status()).toEqual(status);
}

export function setupBeforeAndAfter(): void {
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });
  afterEach(async () => {
    await page.emulateCPUThrottling(1);
  });
  afterAll(() => browser.close());
}
