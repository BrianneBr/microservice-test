import fastify from "fastify";
import AutoLoad from "fastify-autoload";
import CORS from "fastify-cors";
import Swagger from "fastify-swagger";

import * as path from "path";
import { TestDatabase } from "./database";

const port = 3000;

// TODO
const opts = {};

// Creates a fastify app instance
const app = fastify({
	logger: true,
});

// Register cross origin
app.register(CORS);

// Register Swagger plugin
app.register(Swagger, {
	routePrefix: "/documentation",
	swagger: {
		info: {
			title: "Test swagger",
			description: "testing the fastify swagger api",
			version: "0.1.0",
		},
		externalDocs: {
			url: "https://swagger.io",
			description: "Find more info here",
		},
		host: `localhost:${port}`,
		schemes: ["http"],
		consumes: ["application/json"],
		produces: ["application/json"],
	},
	exposeRoute: true,
});

// Do not touch the following lines

// Currently disabled because it will throw an error
// if there is no plugins directory.
if (false) {
	// This loads all plugins in the plugins directory
	// those should be support plugins that are reused
	// through your application
	app.register(AutoLoad, {
		dir: path.join(__dirname, "plugins"),
		options: Object.assign({}, opts),
	});
}

// This loads all plugins defined in services
// define your routes in one of these
app.register(AutoLoad, {
	dir: path.join(__dirname, "services"),
	options: Object.assign({ prefix: "/api" }, opts),
});

// Run the swagger interface once application is ready
app.ready((err) => {
	if (err) {
		throw err;
	}
	app.swagger();
});

// Starts the server, listening on the provided port
app.listen(port, async (err, address) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}

	console.log(`Listening at ${address}`);

	await TestDatabase();
});
