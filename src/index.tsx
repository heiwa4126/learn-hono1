import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { basicAuth } from "hono/basic-auth";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.get("/api/hello", (c) => {
	return c.json({
		ok: true,
		message: "Hello Hono!",
	});
});

app.get("/posts/:id", (c) => {
	const page = c.req.query("page");
	const id = c.req.param("id");
	c.header("X-Message", "Hi!");
	return c.text(`You want see ${page} of ${id}`);
});

app.post("/posts", (c) => c.text("Created!", 201));
app.delete("/posts/:id", (c) => c.text(`${c.req.param("id")} is deleted!`));

const View = () => {
	const title = "Hello Hono!";
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

app.get("/page", (c) => {
	return c.html(<View />);
});

app.get("/raw", (c) => {
	return new Response("Good morning!");
});

app.use(
	"/admin/*",
	basicAuth({
		username: "admin",
		password: "secret",
	}),
);

app.get("/admin", (c) => {
	return c.text("You are authorized!");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
