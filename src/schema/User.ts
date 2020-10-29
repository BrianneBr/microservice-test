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
			description: "Success",
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
			description: "Success",
			// When we get the "OK" status, we return the user object
			type: "object",
			properties: {
				firstName: { type: "string" },
				lastName: { type: "string" },
			},
		},
	},
};

export const CreateUserSchema: FastifySchema = {
	// body is used for POST and PUT - not params
	body: {
		type: "object",
		properties: {
			username: { type: "string" },
			firstName: { type: "string" },
			lastName: { type: "string" },
		},
	},
	response: {
		// status code 201 = success: "Created"
		201: {},
		// status code 500 = Server error: "Internal Server Error"
		500: {},
	},
};

export const EditUserSchema: FastifySchema = {
	// body is used for POST and PUT - not params
	body: {
		type: "object",
		properties: {
			id: { type: "number" },
			username: { type: "string" },
			firstName: { type: "string" },
			lastName: { type: "string" },
		},
	},
	response: {
		501: {},
	},
};

export const DeleteUserSchema: FastifySchema = {
	params: {
		type: "object",
		properties: {
			id: { type: "number" },
		},
	},
	response: {
		// status code 200 = success: "OK"
		200: {},
	},
};
export interface GetUserParams {
	id: number;
}
