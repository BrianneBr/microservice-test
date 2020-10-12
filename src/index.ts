// Express server setup
import express from "express";
import cors from "cors";
import { TestDatabase } from "./database";

// Creates an express app instance
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Starts the server, listening on the provided port
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);

	TestDatabase();
});

// My code here:
