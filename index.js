const express = require('express');
const cors = require('cors');
const getPrayerTimes = require('./getPrayerTimes');

const app = express();
app.use(cors());

app.get('/prayer-times', (req, res) => {
  const { lat, lng, method } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Missing lat/lng parameters' });
  }

  try {
    const times = getPrayerTimes(parseFloat(lat), parseFloat(lng), parseInt(method));
    res.json(times);
  } catch (err) {
    console.error('Error generating prayer times:', err);
    res.status(500).json({ error: 'Failed to fetch prayer times' });
  }
});

app.listen(3000, () => {
  console.log('Prayer Times API running on http://localhost:3000');
});
