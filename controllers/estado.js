const Estado = require("../models/estado");
const { request, response } = require("express");

//Crear
const createEstado = async (req = request, res = response) => {
  try {
    const nombre = req.body.nombre ? req.body.nombre.toUpperCase() : "";
    const estadoDB = await Estado.findOne({ nombre }); //select * from tipoEquipo where nombre=?

    if (estadoDB) {
      return res.status(400).json({ msg: "Ya existe" });
    }
    const data = {
      nombre, // nombre: nombre
    };
    const estado = new Estado(data);
    console.log(estado);
    await estado.save();
    return res.status(201).json(estado);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//Listar
const getEstados = async (req = request, res = response) => {
  try {
    const { estado } = req.query;
    const estadosDB = await Estado.find({ estado }); //select * from estados where estado=?
    return res.json(estadosDB);
  } catch (e) {
    return res.status(500).json({
      msg: "Error general " + e,
    });
  }
};

//Editar
const editar_estado = (req = request, res = response) => {
  const {id} = req.params
  const estado = req.body
  const nuevo = {
      nombre: estado.nombre
  }
  Estado.findByIdAndUpdate(id, nuevo, {new:true}).then(result => {res.json(result)}) 
}

//Eliminar
const eliminar_estado =(req = request, res = response) => {
  const {id} = req.params
  Estado.findByIdAndDelete(id).then(result => {res.json(result)})

}

module.exports = { createEstado, getEstados, editar_estado, eliminar_estado};
