const {
  login,
  created,
  getall,
  getone,
  deleted,
  update,
} = require("../controllers/controller");
const validate = require("../middlewares/validations");
const { Router } = require("express");
const route = Router();

route.post("/login", validate, login);
route.post("/add", created);
route.get("/users", getall);
route.get("/user/:id", getone);
route.delete("/del/:id", deleted);
route.put("/edit/:id", update);

module.exports = route;
