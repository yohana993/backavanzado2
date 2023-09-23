javascript
const mongoose = require('mongoose');
const Articulo = require('./Articulo');

const ticketSchema = new mongoose.Schema({
  subtotal: { type: Number, required: true },
  iva: { type: Number, required: true },
  total: { type: Number, required: true },
  articulos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Articulo' }],
  usuario: { type: String, required: true },
});

module.exports = mongoose.model('Ticket', ticketSchema);
