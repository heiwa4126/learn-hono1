import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";
import app from "./app.js";

describe("app", () => {
	const client = testClient(app);

	it("GET /api/hello should return JSON response", async () => {
		const res = await client.api.hello.$get();
		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			ok: true,
			message: "Hello Hono!",
		});
	});

	it("GET / should return text response", async () => {
		const res = await client.index.$get();
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Hello Hono!");
	});

	it("GET /posts/:id should return post info with query params", async () => {
		const res = await client.posts[":id"].$get({
			param: { id: "123" },
		});
		expect(res.status).toBe(200);
		expect(res.headers.get("X-Message")).toBe("Hi!");
		expect(await res.text()).toContain("123");
	});

	it("POST /posts should create a new post", async () => {
		const res = await client.posts.$post();
		expect(res.status).toBe(201);
		expect(await res.text()).toBe("Created!");
	});

	it("DELETE /posts/:id should delete a post", async () => {
		const res = await client.posts[":id"].$delete({
			param: { id: "456" },
		});
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("456 is deleted!");
	});

	it("GET /page should return HTML page", async () => {
		const res = await app.request("/page");
		expect(res.status).toBe(200);
		expect(res.headers.get("Content-Type")).toMatch(/text\/html/);
		const html = await res.text();
		expect(html).toContain("<title>hello hono!</title>");
		expect(html).toContain("<h1>hello hono!</h1>");
	});

	it("GET /raw should return raw response", async () => {
		const res = await client.raw.$get();
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("Good morning!");
	});

	it("GET /admin should require basic auth", async () => {
		const res = await client.admin.$get();
		expect(res.status).toBe(401);
	});

	it("GET /admin with auth should return authorized message", async () => {
		const res = await client.admin.$get(undefined, {
			headers: {
				Authorization: `Basic ${btoa("admin:secret")}`,
			},
		});
		expect(res.status).toBe(200);
		expect(await res.text()).toBe("You are authorized!");
	});

	it("GET /admin/index.html with auth should return HTML page", async () => {
		const res = await app.request("/admin/index.html", {
			headers: {
				Authorization: `Basic ${btoa("admin:secret")}`,
			},
		});
		expect(res.status).toBe(200);
		expect(res.headers.get("Content-Type")).toMatch(/text\/html/);
		const html = await res.text();
		expect(html).toContain("<title>Hello Hono! in admin</title>");
	});
});
