import express from "express";
import{
    createRoutine,
    deleteRoutine,
    getRoutine,
    updateRoutine,
}
from "../controllers/routine.js";

const router = express.Router();

router.post("/", createRoutine);
router.put("/:id", updateRoutine);
router.delete("/:id", deleteRoutine);
router.get("/:userid", getRoutine);

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