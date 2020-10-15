import fastify from "fastify";
import AutoLoad from "fastify-autoload";
import * as path from "path";
import { Database, TestDatabase } from "./database";

// Creates a fastify app instance
const app = fastify({
	logger: true,
});
const port = 3000;

// TODO
const opts = {};

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

// Starts the server, listening on the provided port
app.listen(port, (err, address) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}

	console.log(`Listening at ${address}`);

	TestDatabase();

	/* 	const db = new Database("testDatabase");
	const users = db.GetUsers();
	console.log(users); */
});
