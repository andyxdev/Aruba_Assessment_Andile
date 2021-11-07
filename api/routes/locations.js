const express = require('express')
const fetch = require('node-fetch');
const router = express.Router();


router.get('/', (req,res,next)=> {
    res.status(200).json({
        message: 'Handling GET requests to /locations'
    });

});


router.post('/', async (req,res,next)=> {

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      };
      
      const location_response = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCCK6hPzvUI1_XbDCV4pC1HN_6bneUejYc', options)
      const location_data = await location_response.json();
      res.json(location_data)

});

module.exports = router;