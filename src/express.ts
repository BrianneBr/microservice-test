// Express server setup
import express from "express";
import cors from "cors";
import { Database, TestDatabase } from "./database";

// Creates an express app instance
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/users", (req, res)=>{
	res.json([
		{
			name: "bob"
		}, 
		{
			name: "Sally"
		}
	]);
});

// Starts the server, listening on the provided port
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);

	TestDatabase();

	const db = new Database("testDatabase");

	const users = db.GetUsers();

	console.log(users);	
});

// My code here:
