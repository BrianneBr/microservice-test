import { FastifyPluginAsync } from "fastify";

/**
 * Main function for this plugin
 * @param fastify
 * @param opts
 */
const plugin: FastifyPluginAsync = async (fastify, opts) => {
	// Setup fastify for this user plugin
	//
	fastify.get("/users", async (req, res) => {
		return { firstName: "Bobson", lastName: "Dugnut" };
	});
};

export default plugin;
