import mongoose from "mongoose";

const entrySchema = new mongoose.Schema ( {
    date: {
        type: Date,
        required: true,
    },
    routines: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Routine",
    },
    meals: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,  
    },

},

    { 
        timestamps: true,
    }

)

export default mongoose.model ( "Entry", entrySchema );



// Models (ChatGPT)
// Models: Define the structure of your data.


// What is Schema?
// A schema refers to the structure that defines how data is organized, stored, and related to each other.


// Why models schema written in SQL?
// To define the structure and relationships of your data in relational databases.


// Why start with Models?

// Models define the schema and structure of your data.
// They establish the foundation of your application’s data layer, ensuring you have a clear structure to work with.