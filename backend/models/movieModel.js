const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    movieTitle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
