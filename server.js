/********************************************************************************
 * WEB322 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with Seneca's
 * Academic Integrity Policy:
 *
 * https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
 *
 * Name: Vraj Mahendrabhai Patel Student ID: 156179228 Date: 01-11-2024
 *
 * Published URL: ___________________________________________________________
 *
 ********************************************************************************/
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sample Lego set data
const legoSets = [{
        num: '001-1',
        name: 'Technic Monster Truck',
        year: 2022,
        theme: 'Technic',
        num_parts: 230,
        img_url: 'https://m.media-amazon.com/images/I/612bfWk+zpL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        num: '002-1',
        name: 'City Fire Truck',
        year: 2021,
        theme: 'City',
        num_parts: 200,
        img_url: 'https://m.media-amazon.com/images/I/71L2J2Y3rDL._AC_UF1000,1000_QL80_.jpg'
    }
];

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the path to the views directory
app.set('views', path.join(__dirname, 'views'));

// Route for home page
app.get('/', (req, res) => {
    res.render('index'); // Assuming you have an index.ejs file
});

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about'); // Assuming you have an about.ejs file
});

// Function to get a Lego set by number
function getLegoSetByNumber(num) {
    return legoSets.find(set => set.num === num);
}
app.get('/lego/sets/:num', (req, res) => {
    const setNum = req.params.num;
    console.log(`Received request for Lego set: ${setNum}`); // Debug log
    const legoSet = getLegoSetByNumber(setNum);

    if (legoSet) {
        console.log('Found Lego set:', legoSet); // Log the found set
        res.render('set', { set: legoSet });
    } else {
        console.log('Lego set not found'); // Log when not found
        res.status(404).send('Lego set not found');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});