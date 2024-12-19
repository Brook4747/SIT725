const express = require('express');
const app = express();
const port = 8080;

// Define the route for adding two numbers
app.get('/addTwoNumbers/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  const sum = num1 + num2;

  // Return the result as JSON
  res.json({ sum: sum });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});