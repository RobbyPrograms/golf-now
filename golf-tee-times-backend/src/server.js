// src/server.js
const app = require('./app');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3001;

// Connect to the database
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});