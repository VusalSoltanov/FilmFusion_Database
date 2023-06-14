const mongoose = require("mongoose");
const MovieCategorySchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
});

const MovieCategory = mongoose.model('MovieCategory', MovieCategorySchema);

module.exports = {
    MovieCategory
};
