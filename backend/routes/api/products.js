const express = require('express');
const asyncHandler = require('express-async-handler');
const { Product } = require('../../db/models');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.findAll();
		res.json({ products });
	})
);

router.get(
	'/:id(\\d+)',
	asyncHandler(async (req, res) => {
		let { id } = req.params;
    if (id) id = Number(id);

		const product = await Product.findByPk(id);
		res.json({ product });
	})
);



module.exports = router;
