const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle KYC form submission
app.post('/saveKYC', (req, res) => {
    const formData = req.body;

    console.log('Received KYC Data:', formData);

    // Send back the form data as the response
    res.status(200).json({
        message: 'KYC Data received successfully!',
        data: formData,
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
