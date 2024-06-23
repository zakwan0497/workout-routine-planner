import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser,
}
from "../controllers/user.js"

const router = express.Router();

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

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