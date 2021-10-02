const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  code: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      alt: String,
      href: String,
      position: Number,
    }
  ],
  image_public_id: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: true,
  },
  price_drop: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  material: {
    type: String,
  },
  additionalDetails: {
    type: String,
  },
  available: {
    type: Boolean,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Product', productSchema);
