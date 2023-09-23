const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  existencias: { type: Number, required: true },
});

module.exports = mongoose.model('Articulo', articleSchema);
