import { DatabaseContext } from "./database/context";

const db = new DatabaseContext();

export async function TestDatabase() {
	await db.sequelize.sync();

	// Add a user
	const bob = await db.User.create({
		firstName: "Bob",
		lastName: "Dobalena",
		email: null
	});

	console.log(bob.toJSON());

	// Get a user
	const foundUser = await db.User.findByPk(1);
	console.log(foundUser?.toJSON());
}
