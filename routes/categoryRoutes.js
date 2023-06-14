const express = require('express');
const { body } = require('express-validator');
const { validate } = require('../middleware/validation');
const { categoryController } = require('../controllers/categoryController');
const router = express.Router();

router.post(
    '/',
    [body('name').notEmpty().withMessage("Category name can't be empty!")],
    validate,
    categoryController.add
);

module.exports = router;
