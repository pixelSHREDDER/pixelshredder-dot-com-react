import { Article } from '@/models/Article'
import mongoose from 'mongoose'
import { Project } from '@/models/Project'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI || MONGODB_URI.length === 0) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

mongoose.connect(MONGODB_URI!);
mongoose.Promise = global.Promise;

const connectDB = {
    Article: Article,
    Project: Project
};

export default connectDB
