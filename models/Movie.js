const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String,
    description: String,
    length: String,
    relaseDate: String,
    image: String,
    imdb:String,
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = {
    Movie
};
