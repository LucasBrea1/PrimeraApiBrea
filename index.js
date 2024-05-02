const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const port = 43922;

// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

/*
------------------
Aca van los endpoints.
------------------
*/

// Nuestra aplicación esta lista para recibir peticiones
app.listen(port, () => {
console.log('Server is running on http://localhost:${port}');
});