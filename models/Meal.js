import mongoose from "mongoose";

const mealSchema = new mongoose.Schema ( {
    name: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    recipe: {
        type: String,
        default: "",
    },
    time: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
},

    {
        timestamps: true,
    }

)

export default mongoose.model("Meal", mealSchema);


// Models (ChatGPT)
// Models: Define the structure of your data.

// Why start with Models?

// Models define the schema and structure of your data.
// They establish the foundation of your application’s data layer, ensuring you have a clear structure to work with.