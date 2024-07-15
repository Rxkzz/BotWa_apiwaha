const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const WAHA_BASE_URL = 'https://waha.devlike.pro/api';

// Endpoint untuk mengirim pesan WhatsApp
app.post('/api/send-text', async (req, res) => {
    try {
        const { phoneNumber, message } = req.body;
        const response = await axios.post(`${WAHA_BASE_URL}/send-text`, {
            phone: phoneNumber,
            message: message
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error sending WhatsApp message:', error.message);
        res.status(500).json({ error: 'Failed to send WhatsApp message' });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
