const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customer_name: {
    type: String,
    required: true,
  },
  customer_email: {
    type: String,
    required: true,
  },
  customer_phone: {
    type: String,
    required: true,
  },
  customer_address: {
    type: String,
    required: true,
  },
  customer_city: {
    type: String,
    required: true,
  },
  customer_post_index: {
    type: String,
    required: true,
  },
  customer_order_notes: {
    type: String,
    required: false,
  },
  totalPrice: {
    type: Number,
    default: 0.0,
  },
  isPaid: Boolean,
  isDelivered: {
    type: Boolean,
    default: false,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
