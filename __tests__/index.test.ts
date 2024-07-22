import { testClient } from "hono/testing";
import app from "../src/app.js";

it("test", async () => {
	const client = testClient(app);
	const res = await client.api.hello.$get();
	expect(res.status).toBe(200);
	expect(await res.json()).toEqual({
		ok: true,
		message: "Hello Hono!",
	});
});
