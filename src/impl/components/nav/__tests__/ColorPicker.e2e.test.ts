import { ElementHandle } from "puppeteer";

import * as E2E from "../../../__tests__/AppE2ETest";

const ICON_SELECTOR = "[data-testid='color-icon']";
const DEFAULT_COLOR_RGB = "rgb(46, 49, 52)"; // #2e3134 in rgb
const BABY_PINK_RGB = "rgb(255, 194, 226)"; // #ffc2e2 in rgb

describe("Color Picker", () => {
  E2E.setupBeforeAndAfter();

  async function genIconHandle() {
    await E2E.page.goto(E2E.mainURL);
    return await E2E.page.waitForSelector(ICON_SELECTOR, {
      visible: true,
    });
  }

  async function genExpect(
    handle: ElementHandle<Element> | null,
    expectSuspense: boolean,
  ): Promise<ElementHandle<Element> | null> {
    const [input, suspense] = await Promise.all([
      handle!.$("[data-testid='color-input']"),
      handle!.$("[data-testid='color-suspense']"),
    ]);

    expect(expectSuspense ? input : suspense).toBeNull();
    expect(expectSuspense ? suspense : input).not.toBeNull();

    return input;
  }

  async function genBackgroundColor(): Promise<string> {
    return await E2E.page.$eval("[data-testid='navbar']", (e) =>
      window.getComputedStyle(e).getPropertyValue("background-color"),
    );
  }

  test("color picker menu is suspended", async () => {
    const handle = await genIconHandle();
    expect(handle).not.toBeNull();

    await E2E.page.emulateCPUThrottling(8);
    await handle!.click();

    await genExpect(handle, true);
  });

  test("color picker menu is visible", async () => {
    const handle = await genIconHandle();
    await handle!.hover();
    await handle!.click();

    const [input, oldBg] = await Promise.all([
      genExpect(handle, false),
      genBackgroundColor(),
    ]);

    expect(oldBg).toEqual(DEFAULT_COLOR_RGB);

    await input!.click({ clickCount: 3 });
    await E2E.page.keyboard.press("Backspace");
    await input!.type("ffc2e2");

    const newBg = await genBackgroundColor();

    expect(newBg).toEqual(BABY_PINK_RGB);
  });
});
