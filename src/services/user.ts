import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { userInfo } from "os";
import { REPL_MODE_SLOPPY } from "repl";
import { GetUserParams, GetUserSchema, rootSchema } from "../schema/User";

// const User = require("./User");

// TODO Add:
//	endpoint for: creating users
//	endpoint for: get specific user
//	endpoint for: updating a specific user
//	endpoint for: deleting a user

/**
 * Main function for this plugin
 * @param fastify
 * @param opts
 */
const plugin: FastifyPluginAsync = async (fastify, opts) => {
	// Endpoint for getting all users
	// Args are the path, the custom schema, and the callback function
	// "s" adds an "s" to the end of "user" in the route path
	fastify.get("s", { schema: rootSchema }, async (req, res) => {
		return { firstName: "Bobson", lastName: "Dugnut" };
	});

	// Endpoint for getting a single user
	fastify.get("/:id", { schema: GetUserSchema }, (req, res) => {
		const userId = (req.params as GetUserParams).id;
		/* User.findById(userId, (err: Error, user: object) => {
			// Return an error if encountered
			if(err) {
				res.send({error: err});
				return;
			}
			// Send the user data as a response if successful
			res.send(user);
			return;
		}) */
	});

	/* // Endpoint for getting all users
	fastify.get("/users", (req, res) => {
		User.find({}, (err: Error, users: object) => {
			// Return an error if encountered
			if(err) {
				res.send({error: err});
				return;
			}
			// Send the user data as a response if successful
			res.send(users);
			return;
		})
	}) */
};

export default plugin;
export const autoPrefix = "/user";
