import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)

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