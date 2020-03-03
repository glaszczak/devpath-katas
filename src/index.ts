import app from "./app";

const main = async () => {
	await app.listen(app.get("port"));
	console.log(`Server started on port `, app.get("port"));
};

main();
