import express from "express";
import {
    createRoutine,
    deleteRoutine,
    getRoutines,
    updateRoutine,
} from "../controllers/routine.js";

const router = express.Router();

router.post("/", createRoutine);
router.put("/:id", updateRoutine);
router.delete("/:id", deleteRoutine);
router.get("/:userId", getRoutines);

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


// Containes routes to handle "routines"
// e.g. daily task, workout routine, etc.
// Defines the endpoints for CRUD operations on routines data.