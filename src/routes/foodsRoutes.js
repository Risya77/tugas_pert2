const foodsRoutes = require("express").Router();
const foodsControllers = require("../controllers/foodsControllers")

foodsRoutes.get("/", foodsControllers.getAllFoods);
foodsRoutes.post("/", foodsControllers.postFoods);
foodsRoutes.get("/:id", foodsControllers.getDataById);
foodsRoutes.post("/:id", foodsControllers.updateDataById);
foodsRoutes.delete("/:id", foodsControllers.deleteData);
module.exports = foodsRoutes;