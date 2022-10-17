const crudsync = require("../models/crud_sync");

const login = (req, res) => {
  const { username, password } = req.body;
  const result = crudsync.Login(username, password);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json({ msg: "Acceso denegado" });
  }
};
const getall = (req, res) => {
  res.status(200).send(crudsync.Getall());
};
const getone = (req, res) => {
  const user = req.params.id;
  const result = crudsync.Getone(user);
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ msg: "usuario no encontrado" });
  }
};
const created = (req, res) => {
  const newuser = req.body;
  const result = crudsync.Create(newuser);
  if (result) {
    res.status(200).json({ msg: "usuario creado" });
  } else {
    res.status(200).json({ msg: "Este usuario ya fue registrado" });
    res.status(404);
  }
};
const deleted = (req, res) => {
  const user = req.params.id;
  const result = crudsync.Delete(user);
  if (result) {
    res.status(200).json({ msg: "usuario eliminado" });
  } else {
    res.status(400);
    res.status(200).json({ msg: "usuario no encontrado" });
  }
};
const update = (req, res) => {
  const user = req.params.id;
  const edit = req.body;
  const result = crudsync.Update(user, edit);
  if (result) {
    res.status(200).json({ msg: "usuario actualizado" });
  } else {
    res.status(400).json({ msg: "Usuario No encontrado" });
  }
};
module.exports = { getall, getone, created, deleted, update, login };