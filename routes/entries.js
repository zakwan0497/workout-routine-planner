import express from "express";
import {
    createEntry,
    deleteEntry,
    getEntry,
    updateEntry,
    getMealsAndRoutines,
}
from "../controllers/entry.js";

const router = express.Router();

router.post("/", createEntry);
router.put("/:id", updateEntry);
router.delete("/:id", deleteEntry);
router.get("/:userId", getEntry);
router.get("/fetchMealsAndRoutines/:id", getMealsAndRoutines);

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