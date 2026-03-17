const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true, enum: ['事实类', '价值类', '政策类'] },
    subCategories: [{ type: String }],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
