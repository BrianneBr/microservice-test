import { FastifyPluginAsync } from "fastify";
import { rootSchema } from "../schema/User";

/**
 * Main function for this plugin
 * @param fastify
 * @param opts
 */
const plugin: FastifyPluginAsync = async (fastify, opts) => {
	// Setup fastify for this user plugin
	// Args are the path, the custom schema, and the callback function
	fastify.get("/users", { schema: rootSchema }, async (req, res) => {
		return { firstName: "Bobson", lastName: "Dugnut" };
	});
};

export default plugin;
