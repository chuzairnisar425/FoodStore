import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        if (connection.connection.readyState === 1) { // readyState 1 means connected
            console.log('Connected to MongoDB');
        } else {
            console.log('MongoDB connection failed');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};
