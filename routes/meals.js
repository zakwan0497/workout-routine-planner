import express from "express";
import {
    createMeal,
    deleteMeal,
    getMeal,
    updateMeal,
}
from "../controllers/meal.js"

const router = express.Router();

router.post("/", createMeal);
router.put("/:id", updateMeal);
router.delete("/:id", deleteMeal);
router.get("/:userid", getMeal);

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


// Routes relating to handling "meals"
// Perform CRUD operations on meals data
// e.g. meal planning, diet tracking, etc.
