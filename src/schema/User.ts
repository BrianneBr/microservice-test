import { FastifySchema } from "fastify";

/*
HTTP status codes:

100–199   Informational responses 
200-299   Successful responses
300-399   Redirects
400-499   Client errors
500-599   Server errors
*/

export const rootSchema: FastifySchema = {
	response: {
		// status code 200 = success: "OK"
		200: {
			// When we get the "OK" status, we return the user object
			type: "object",
			properties: {
				firstName: { type: "string" },
				lastName: { type: "string" },
			},
		},
	},
};

export const GetUserSchema: FastifySchema = {
	params: {
		type: "object",
		properties: {
			id: { type: "number" },
		},
	},
	response: {
		// status code 200 = success: "OK"
		200: {
			// When we get the "OK" status, we return the user object
			type: "object",
			properties: {
				firstName: { type: "string" },
				lastName: { type: "string" },
			},
		},
	},
};

export interface GetUserParams {
    id: number;
}
