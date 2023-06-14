//          ./controllers/movieController.js


const { Movie } = require("../models/Movie");
const { Category } = require("../models/Category");
const mongoose = require("mongoose");

const movieController = {
    getAll: (req, res) => {
        // console.log('geldi');
        Movie.find()
            .populate('categories')
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    getById: (req, res) => {
        const id = req.params.id;

        Movie.findById(id)
            .populate('categories')
            .then(data => {
                if (data)
                    res.json(data);
                else
                    res.status(400).json({ 'msg': 'Not Found!' });
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    add: (req, res) => {
        const { name, description, length, relaseDate, image, categories,imdb } = req.body;
      
        const movie = new Movie({
          name,
          description,
          length,
          relaseDate,
          image,
          categories,
          imdb
        });
      
        movie.save()
          .then(savedMovie => {
            Category.updateMany(
              { _id: { $in: categories } },
              { $push: { movies: savedMovie._id } }
            ).exec();
      
            res.json(savedMovie);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      },
    delete: (req, res) => {
        const id = req.params.id;

        Movie.findByIdAndDelete(id)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    },
    getCategories: (req, res) => {
        Category.find()
            .populate('movies')
            .exec()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }
};

module.exports = {
    movieController
};
