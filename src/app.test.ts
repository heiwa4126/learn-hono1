import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";
import app, { type AppType } from "./app.js";

describe("app", () => {
	it("should return hello response", async () => {
		const client = testClient<AppType>(app);
		const res = await client.api.hello.$get();
		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			ok: true,
			message: "Hello Hono!",
		});
	});
});
