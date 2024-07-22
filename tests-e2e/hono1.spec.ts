import { expect, test } from "@playwright/test";

// test.beforeEach(async ({ page }) => {});

test("has title", async ({ page }) => {
	await page.goto("http://localhost:3000/page");
	await page.waitForLoadState("load");
	await expect(page).toHaveTitle("Hello Hono!");
});

test("basic authentication", async ({ page }) => {
	await page.goto("http://localhost:3000/admin/index.html");
	await page.waitForLoadState("load");
	await expect(page).toHaveTitle("Hello Hono!");
});
