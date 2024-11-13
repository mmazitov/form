const { MongoClient } = require('mongodb');

// Replace the URI with your MongoDB Atlas connection string
const uri =
	'mongodb+srv://mmazitov:akg123koss@cluster0.rfnigpo.mongodb.net/todos?retryWrites=true&w=majority';

async function run() {
	const client = new MongoClient(uri);

	try {
		// Attempt to connect to the database
		await client.connect();
		console.log('Successfully connected to the database!');
	} catch (error) {
		console.error('Failed to connect to the database:', error);
	} finally {
		// Close the connection
		await client.close();
	}
}

run();
