import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";
import { z } from "zod";

const api = new Hono().get("/hello", (c) => {
	return c.json({
		ok: true,
		message: "Hello Hono!",
	});
});

export const postsQuerySchema = z.object({
	page: z.coerce.number().positive().optional().default(0),
});

const posts1 = new Hono()
	.get("/:id", zValidator("query", postsQuerySchema), (c) => {
		const { page } = c.req.valid("query");
		const id = c.req.param("id");
		c.header("X-Message", "Hi!");
		return c.text(`You want see ${page} of ${id}`);
	})
	.post("/", (c) => c.text("Created!", 201))
	.delete("/:id", (c) => c.text(`${c.req.param("id")} is deleted!`));

const View1 = ({ title = "hello hono!" }: { title?: string }) => {
	return (
		<html lang="en">
			<head>
				<title>{title}</title>
			</head>
			<body>
				<h1>{title}</h1>
			</body>
		</html>
	);
};

const app = new Hono()
	.route("/api", api)
	.route("/posts", posts1)
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.get("/page", (c) => {
		return c.html(<View1 />);
	})
	.get("/raw", (_c) => {
		return new Response("Good morning!");
	})
	.use(
		"/admin/*",
		basicAuth({
			username: "admin",
			password: "secret",
		}),
	)
	.get("/admin", (c) => {
		return c.text("You are authorized!");
	})
	.get("/admin/index.html", (c) => {
		return c.html(<View1 title="Hello Hono! in admin" />);
	});

export default app;
