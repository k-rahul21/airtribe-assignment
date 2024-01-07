const express = require("express");
const router = express.Router();

const hotels = [
  {
    id: 1,
    name: 'Hotel 1',
    location: 'New Delhi'
  },
  {
    id: 2,
    name: 'Hotel 2',
    location: 'Old Delhi'
  },
  {
    id: 3,
    name: 'Hotel 3',
    location: 'Jaipur'
  },
  {
    id: 4,
    name: 'Hotel 4',
    location: 'Udaipur'
  }
]

router.get("/hotels", (req, res) => {
  res.send(hotels)
})

router.get("/hotels/:id", (req, res) => {
  const id = req.params.id;
  const filteredHotel = hotels.find((hotel) => hotel.id === parseInt(id));
  if(!filteredHotel) {
    return res.status(404).json({message: "Hotel not found!"})
  }
  res.send(filteredHotel);
})

router.post("/hotels", (req, res) => {
  const hotel = req.body;
  hotel.id = hotels.length + 1;
  hotels.push(hotel);
  res.send(hotel);
})


module.exports = router;