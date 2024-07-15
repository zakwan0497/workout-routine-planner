Creating workout routine planner for final project of OCB MERN 2024

Step 1 : Create "models" folder. For database structure.

Step 2 : Create "routes" folder. For defining endpoints of the app, and respond to GET, POST, PUT, DELETE (HTTP requests).

Step 3 : Create "controllers" folder. Used to store controller files that handle the logic for your application's routes. Each controller file typically corresponds to a specific resource or entity (such as users, products, or orders) and contains functions (also known as controllers) that manage the CRUD (Create, Read, Update, Delete) operations and other business logic for that resource.

        Function of "controllers" folder:
         - Separation of Concerns
         - Reusability
         - Organization
         - Modularity
         - Reusable Logic

Step 4 : Create "utils" folder. Used to store utility functions and modules that provide common functionalities needed across the application. These utility functions are typically reusable and help in keeping the codebase DRY (Don't Repeat Yourself). The utils folder can contain helper functions, configuration files, middleware, or any other piece of code that doesn't fit neatly into the model, controller, or route categories.

        Function of "utils" folder:
        - Code Reusability
        - Organization
        - Maintainability

Step 5 : Create "index.js". Ihe main entry point for a backend application. It sets up the Express app, configures middleware, connects to the database, defines route handlers, applies global error handling, and starts the server. This file is crucial for initializing the application and ensuring that all components are correctly configured and ready to handle requests.
