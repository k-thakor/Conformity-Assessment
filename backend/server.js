// server.js (Backend API)
const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 5000;

// Use CORS middleware
app.use(cors());

// Mock data for compliance metrics
const getRandomMetrics = () => ({
  complianceScore: Math.floor(Math.random() * 100), // Random compliance score
  totalViolations: Math.floor(Math.random() * 20), // Random number of violations
  averageResolutionTime: Math.floor(Math.random() * 10), // Random average resolution time in days
});

app.get('/api/compliance-metrics', (req, res) => {
  res.json(getRandomMetrics());
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
