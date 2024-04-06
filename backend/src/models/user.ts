import mongoose, { Document, Schema } from "mongoose";

// Define the interface for User document
interface UserDocument extends Document {
	username: string;
	email: string;
	password: string;
	createdAt: Date;
}

// Define the user schema
const userSchema: Schema<UserDocument> = new Schema({
	username: {
		type: String,
		required: true,
		unique: true, // Ensure uniqueness of usernames
	},
	email: {
		type: String,
		required: true,
		unique: true, // Ensure uniqueness of email addresses
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now, // Default value set to current date/time
	},
});

// Create a User model based on the schema
const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
