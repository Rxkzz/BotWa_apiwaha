const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// URL API WAHA (sesuaikan dengan URL Anda)
const WAHA_API_URL = 'https://localhost:3000/api';

// Endpoint untuk mengirim pesan teks
app.post('/send-text', async (req, res) => {
    const { to, message } = req.body;

    try {
        const response = await axios.post(`${WAHA_API_URL}/sendText`, {
            to,
            message
        });

        res.json({
            status: 'success',
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
