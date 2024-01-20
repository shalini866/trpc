import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  const MONGO_URI =
    'mongodb+srv://admin:smartwork123@cluster0.zq3u635.mongodb.net/Node-Crud?retryWrites=true&w=majority';

  mongoose.connect(MONGO_URI);

  const db = mongoose.connection;

  db.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  db.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if the connection fails
  });

  // You can also use the `once` method to listen for the 'open' event,
  // which is emitted once when the connection is opened successfully
  db.once('open', () => {
    console.log('MongoDB connection opened');
  });

  // You can also listen for the 'disconnected' event
  db.on('disconnected', () => {
    console.log('MongoDB connection disconnected');
  });

  // You can listen for other events as needed

  // In a production scenario, you might want to handle more sophisticated scenarios,
  // such as retrying the connection, logging, etc.
};
