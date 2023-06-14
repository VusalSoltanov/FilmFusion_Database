const express = require('express');
const { body } = require('express-validator');
const { validate } = require('../middleware/validation');
const { movieController } = require('../controllers/movieController');
const router = express.Router();

router.get('/categories', movieController.getCategories);
router.get('', movieController.getAll);
router.get('/:id', movieController.getById);

router.post(
    '/',
    [body('name').notEmpty().withMessage("Name can't be empty!")],
    [body('description').notEmpty().withMessage("Description can't be empty!")],
    [body('length').notEmpty().withMessage("Movie length can't be empty!")],
    [body('image').notEmpty().withMessage("Image is required!")],
    [body('imdb').notEmpty().withMessage("Imdb is required!")],
    [body('relaseDate').notEmpty().withMessage("Relase Date is required!")],
    [body('categories').isArray({ min: 1 }).withMessage("At least one category is required!")],
    validate,
    movieController.add
);

router.delete('/:id', movieController.delete);

module.exports = router;
