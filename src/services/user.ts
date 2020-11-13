import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { STATUS_CODES } from "http";
import { User } from "../models/user";
import {
	CreateUserParams,
	CreateUserSchema,
	DeleteUserSchema,
	EditUserSchema,
	GetUserParams,
	GetUserSchema,
	rootSchema,
} from "../schema/User";

// const User = require("./User");

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
		// "res.send(...)" can be used in place of "return ..."
		res.send(await User.findAll());
		return;
	});

	// Endpoint for getting a single user
	// https://github.com/fastify/fastify/blob/master/docs/TypeScript.md#using-generics
	fastify.get<{
		Params: GetUserParams;
	}>("/:id", { schema: GetUserSchema }, (req, res) => {
		// Params is defined above, so "req.params" doesn't need to be cast
		const userId = req.params.id;
		console.log(userId);
		//#region usdhajka
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
		//#endregion
	});

	// Endpoint for creating a user
	fastify.post<{
		Body: CreateUserParams;
	}>("/create", { schema: CreateUserSchema }, async (req, res) => {
		// Because this is a POST, we want to use "body", not "params"
		const user = new User();
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;

		// Save the user to the db
		await user.save();

		// status code 201 = success: "Created"
		res.status(201);
		res.send({
			id: user.id,
		});
		return;
	});

	// Endpoint for updating a single user
	fastify.put("/edit", { schema: EditUserSchema }, (req, res) => {
		res.status(501);
		res.send();
		return;
	});

	// Endpoint for deleting a user
	fastify.delete("/:id", { schema: DeleteUserSchema }, (req, res) => {
		res.status(501);
		res.send();
		return;
	});
};

export default plugin;
export const autoPrefix = "/user";
