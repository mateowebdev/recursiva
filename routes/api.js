const express = require("express");
const {
  getEquipos,
  getTotalSocios,
  getPromedioEdadEquipo,
  getCasadosUniversitarios,
} = require("../controllers/apiController");

const router = express.Router();

router.get("/equipos", getEquipos);
router.get("/total-socios", getTotalSocios);
router.get("/promedio-edad", getPromedioEdadEquipo);
router.get("/casados-universitarios", getCasadosUniversitarios);

module.exports = router;
