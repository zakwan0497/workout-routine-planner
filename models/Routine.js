import mongoose from "mongoose";

const routineSchema = new mongoose.Schema ( {
    name: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    workoutType: {
        type: String,
        required: true,
    },
    bodyPart: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
},

    {
        timestamps: true,
    }

)

export default mongoose.model("Routine", routineSchema);



// Models (ChatGPT)
// Models: Define the structure of your data.


// What is Schema?
// A schema refers to the structure that defines how data is organized, stored, and related to each other.


// Why models schema written in SQL?
// To define the structure and relationships of your data in relational databases.


// Why start with Models?

// Models define the schema and structure of your data.
// They establish the foundation of your application’s data layer, ensuring you have a clear structure to work with.