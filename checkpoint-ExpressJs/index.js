// const express = require('express');

// const app = express();
// const port = 4000;

// // Wildcard route: Handles all URLs and responds with "Hello World"
// app.get('*', (req, res) => {
//   res.end('Hello World');
// });

// // Dynamic route: Accepts a username as a URL parameter and responds with an HTML page
// app.get('/name/:user_name', (req, res) => {
//   const userName = req.params.user_name;
//   res.status(200).set('Content-Type', 'text/html').send(`
//     <html>
//       <body>
//         <h1>Hello ${userName}</h1>
//       </body>
//     </html>
//   `);
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`The server is running, please open your browser at http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const port = 4000;

// Middleware to restrict access outside working hours (Mon-Fri, 9 AM - 5 PM)
const workingHoursMiddleware = (req, res, next) => {
  const currentTime = new Date();
  const currentDay = currentTime.getDay();  // 0: Sunday, 1: Monday, ..., 6: Saturday
  const currentHour = currentTime.getHours();  // 0-23

  // Only allow if it's Monday-Friday (1-5) and between 9 AM and 5 PM
  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
    next();  // Continue to the next middleware or route handler
  } else {
    res.status(403).send("The application is only available during working hours (Monday to Friday, 9 AM to 5 PM).");
  }
};

// Apply the middleware globally
app.use(workingHoursMiddleware);

// Set view engine to render HTML templates (optional for this task, but good practice)
app.set('view engine', 'ejs');

// Static files (for CSS, JS, etc.)
app.use(express.static('public'));

// Routes for different pages

// Home page
app.get('/', (req, res) => {
  res.render('home');  // renders home.ejs
});

// Our Services page
app.get('/services', (req, res) => {
  res.render('services');  // renders services.ejs
});

// Contact Us page
app.get('/contact', (req, res) => {
  res.render('contact');  // renders contact.ejs
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
