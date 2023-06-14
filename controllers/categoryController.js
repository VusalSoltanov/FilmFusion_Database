//          ./controllers/categoryController.js


const { Category } = require("../models/Category");

const categoryController = {
    add: (req, res) => {
        const { name } = req.body;

        const category = new Category({
            name
        });

        category.save()
            .then(savedCategory => {
                res.json(savedCategory);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }
};

module.exports = {
    categoryController
};
