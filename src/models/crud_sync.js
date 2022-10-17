const fs = require("fs");
const path = require("path");
const pathDB = path.join(__dirname, "../db/db.json");

const Login = (user, pass) => {
  const found = Getall().find(
    (item) => item.username === user && item.password === pass
  );
  if (found) {
    return true;
  } else {
    return false;
  }
};
const Getall = () => {
  return JSON.parse(fs.readFileSync(pathDB, "utf8"));
};
const Getone = (user) => {
  const found = Getall().find((item) => item.id === user)
  // ?.nombre  <------luego de filtrar por id, envia como respuesta solo el nombre
  return found;
};
const Create = (user) => {
  const found = Getall().filter((item) => item.id == user.id);
  const db = Getall();
  if (found.length == 0) {
    db.push(user);
    fs.writeFileSync(pathDB, JSON.stringify(db, null, 2), "utf-8");
    return true;
  } else {
    return false;
  }
};
const Update = (user, edit) => {
  const newarray = Getall().filter((item) => item.id != user);
  const db = Getall();
  if (newarray.length != db.length) {
    newarray.push(edit);
    fs.writeFileSync(pathDB, JSON.stringify(newarray, null, 2), "utf-8");
    return true;
  } else {
    return false;
  }
};
const Delete = (id) => {
  const newarray = Getall().filter((item) => item.id != id);
  const db = Getall();
  if (newarray.length != db.length) {
    fs.writeFileSync(pathDB, JSON.stringify(newarray, null, 2), "utf8");
    return true;
  } else {
    return false;
  }
};
module.exports = { Getall, Getone, Create, Update, Delete, Login };


// Delete(1143120448);

// Update(1143120448, {
//   id: "1143120448",
//   nombre: "Bryan",
// });
// Create({
//   id: "111",
//   nombre: "Bryan",
//   apellido: "Orozco",
//   edad: "32",
//   cel: "3012303803",
//   username: "ryan",
//   password: "xxx",
// });
