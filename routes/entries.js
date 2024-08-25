import express from "express";
import {
    createEntry,
    deleteEntry,
    getEntries,
    updateEntry,
    getMealsAndRoutines,
} from "../controllers/entry.js";

const router = express.Router();

router.post("/", createEntry);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);
router.get("/:userId", getEntries);
router.get("/fetchMealsAndRoutines/:id", getMealsAndRoutines)

export default router;



// What is ROUTES?

// Routes define the endpoints of the application
// How it should respond to various HTTP requests
// Routes map URL to specific codes
// RESTful APIs

// Endpoint:
// e.g. /users , /products

// HTTP methods:
// GET, POST, PUT, DELETE


// "routes/entries.js" contains routes related to handling entries (meals and routines)
// e.g. posts, journak entries, to-do items, etc.
// This file defines the endpoint for Creating, Reading, Updating, and Deleting entries.
