const express = require('express');
const { getPolitcsData, getSportsData, getGeneralData } = require('./StaticData');

const app = express();

// Endpoint to fetch politics data
app.get("/api/Politics", async (req, res) => {
    try {
        // Fetch politics data
        const newsData = await getPolitcsData();
        // Log success message and fetched data
        console.log("Politics data fetched successfully");
        console.log(newsData);
        // Send fetched data as response
        res.json(newsData);
    } catch (error) {
        // Log error and send 500 status code with error message as response
        console.error("Error fetching politics data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Endpoint to fetch sports data
app.get("/api/Sports", async (req, res) => {
    try {
        // Fetch sports data
        const newsData = await getSportsData();
        // Send fetched data as response
        res.json(newsData);
    } catch (error) {
        // Log error and send 500 status code with error message as response
        console.error("Error fetching sports data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Endpoint to fetch general data
app.get("/api/general", async (req, res) => {
    try {
        // Fetch general data
        const newsData = await getGeneralData();
        // Send fetched data as response
        res.json(newsData);
    } catch (error) {
        // Log error and send 500 status code with error message as response
        console.error("Error fetching general data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server on port 5000
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
