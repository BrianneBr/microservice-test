import path from "path";
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/user";

export async function TestDatabase() {
	// Connect to the database
	const sequelize = new Sequelize({
		dialect: "sqlite",
		storage: path.join(process.cwd(), "tmp", "database.sqlite"),
		models: [path.join(__dirname, "models")],
	});

	// Check if we have a valid connection
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
		return;
	}

	// Synchronize all defined models with the database.
	// This essentially creates the required tables, or
	// updates the schema of existing tables.
	await sequelize.sync({ force: false });

	// Create a user
	const user = new User();
	user.firstName = "first";
	user.lastName = "last";

	// Save the user to the db
	await user.save();

	// Close the connection
	await sequelize.close();
}
