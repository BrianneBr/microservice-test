// Express server setup
import express from "express";

// Creates an express app instance
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Starts the server, listening on the provided port
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

// My code here:
