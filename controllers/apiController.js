const Service = require("../service");

const getEquipos = (req, res) => {
  const service = new Service();
  const result = service.getEquipos();
  res.status(200).json({ data: result });
};

const getTotalSocios = (req, res) => {
  const service = new Service();
  const result = service.getTotalSocios();
  res.status(200).json({ data: result });
};

const getPromedioEdadEquipo = (req, res) => {
  const { equipo } = req.query;
  const service = new Service();
  if (!equipo) {
    res.status(400).json({ data: "No team" });
  }
  const result = service.getPromedioEdadPorEquipo(equipo);
  res.status(200).json({ data: result });
};

const getCasadosUniversitarios = (req, res) => {
  const { limit } = req.query;
  const service = new Service();

  if (limit<1 || limit > 200) {
    res.status(400).json({ data: "Invalid limit. (1 - 200)" });
  }
  console.log("queeeeeeee");
  const result = service.getCasadosConEstudios(limit);
  res.status(200).json({ data: result });
};


module.exports = {
  getTotalSocios,
  getPromedioEdadEquipo,
  getCasadosUniversitarios,
  getEquipos
};
