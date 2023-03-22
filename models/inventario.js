const { Schema, model } = require("mongoose");

const InventarioSchema = Schema({
  serial: {
    type: String,
    required: [true, "Serial requerido"],
    unique: [true, "equipo en uso"],
  },
  modelo: {
    type: String,
    required: [true, "modelo requerido"],
    unique: [true, "modelo debe ser único"],
  },
  descripcion: {
    type: String,
  },
  foto: {
    type: String,
  },
  color: {
    type: String,
  },
  fechaCompra: {
    type: Date,
  },
  precio: {
    type: Number,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  marca: {
    type: Schema.Types.ObjectId,
    ref: "Marca",
    required: true,
  },
  estado: {
    type: Schema.Types.ObjectId,
    ref: "Estado",
    required: true,
  },
  tipoEquipo: {
    type: Schema.Types.ObjectId,
    ref: "TipoEquipo",
    required: true,
  },
});

module.exports = model("Inventario", InventarioSchema);
