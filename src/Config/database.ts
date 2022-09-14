
import mongoose from 'mongoose';
import 'dotenv/config'


async function connectDB() {
    try {
        const conn: any = await mongoose.connect(process.env.DATABASE_URI as string)
        console.log('Connected to Database:', conn.connection.host)
    } catch (err) {
        console.log(err);
    }
}

export default connectDB