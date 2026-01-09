import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";

const api = new Hono().get("/hello", (c) => {
	return c.json({
		ok: true,
		message: "Hello Hono!",
	});
});

const View = ({ title = "hello hono!" }: { title?: string }) => {
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
	.get("/", (c) => {
		return c.text("Hello Hono!");
	})
	.get("/posts/:id", (c) => {
		const page = c.req.query("page");
		const id = c.req.param("id");
		c.header("X-Message", "Hi!");
		return c.text(`You want see ${page} of ${id}`);
	})
	.post("/posts", (c) => c.text("Created!", 201))
	.delete("/posts/:id", (c) => c.text(`${c.req.param("id")} is deleted!`))
	.get("/page", (c) => {
		return c.html(<View />);
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
		return c.html(<View title="Hello Hono! in admin" />);
	});

export type AppType = typeof app;
export default app;
