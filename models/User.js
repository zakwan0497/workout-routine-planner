import mongoose from "mongoose";

const userSchema = new mongoose.Schema ( {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    routines: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Routine",
    },
    entries: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Entry",
    },
    meals: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Routine",
    },
    
},
    {
        timestamps: true
    }

);

export default mongoose.model("User", userSchema);




// CARA TULIS SQL

// 1. one-to-many relationship     -     Array of ObjectId
// 2. many-to-one relationship     -     Single ObjectId
// 3. one-to-one relationship      -     Single ObjectId


// Models (ChatGPT)
// Models: Define the structure of your data.


// What is Schema?
// A schema refers to the structure that defines how data is organized, stored, and related to each other.


// Why models schema written in SQL?
// To define the structure and relationships of your data in relational databases.


// Why start with Models?

// Models define the schema and structure of your data.
// They establish the foundation of your application’s data layer, ensuring you have a clear structure to work with.