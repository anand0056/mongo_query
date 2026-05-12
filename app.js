const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const mongoUrl = "mongourl";
const collectionName = 'vehiclePositions';
const queryBody = [{
  $match: {
    _id: "353742371875287_2026-05-07"
  }
},
{
  $project: {
    _id: 0,
    data: {
      $map: {
        input: "$locations",
        as: "loc",
        in: {
          time: "$$loc.time",
          value: "$$loc.attributes.io201"
        }
      }
    }
  }
}];



app.get('/', async (req, res) => {
  try {
    const data = await mongoose.connection.db.collection(collectionName).aggregate(queryBody).toArray();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
