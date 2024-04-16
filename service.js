const MockDatabase = require("./dbMock");

class Service {
  constructor() {
    this.db = new MockDatabase().getDbData();
  }

  getTotalSocios() {
    // 1. Cantidad total de personas registradas.
    const socios = this.db;
    return socios.length;
  }

  getPromedioEdadPorEquipo(equipo) {
    // 2. El promedio de edad de los socios de Racing.
    // Mejora: busca por equipo.
    const socios = this.db;
    const sociosFiltrados = socios.filter((socio) => socio.equipo === equipo);
    const promedioEdadSocios =
      sociosFiltrados.reduce((acc, socio) => acc + socio.edad, 0) /
      sociosFiltrados.length;
    return promedioEdadSocios;
  }

  getCasadosConEstudios(limit = 10) {
    // 3. Un listado con las 100 primeras personas casadas, con estudios
    // Universitarios, ordenadas de menor a mayor según su edad. Por
    // cada persona, mostrar: nombre, edad y equipo.
    const socios = this.db;
    const sociosCasadosUniversitarios = socios.filter(
      (socio) =>
        socio.estado_civil === "Casado" &&
        socio.nivel_estudios === "Universitario"
    );
    const primeros100 = sociosCasadosUniversitarios.slice(0, limit);
    const primeros100ordenados = primeros100.sort((a, b) => a.edad - b.edad);
    return primeros100ordenados;
  }

  getNombresMasComunesPorEquipo(cantidad = 5, equipo = "River") {
    // 4. Un listado con los 5 nombres más comunes entre los hinchas de River.
    const socios = this.db;
    const hinchas = socios.filter((socio) => socio.equipo === equipo);

    const nombres = hinchas
      .map((socio) => socio.nombre)
      .reduce((acc, nombre) => {
        acc[nombre] = (acc[nombre] || 0) + 1;
        return acc;
      }, {});
    const nombresComunesOrdenados = Object.keys(nombres)
      .sort((a, b) => nombres[b] - nombres[a])
      .slice(0, cantidad);
    return nombresComunesOrdenados;
  }

  getResumenClubes() {
    // 5. Un listado, ordenado de mayor a menor según la cantidad de
    // socios, que enumere, junto con cada equipo, el promedio de edad
    // de sus socios, la menor edad registrada y la mayor edad registrada.
    const socios = this.db;

    const promedioPorEquipo = socios.reduce((acc, socio) => {
      const equipo = socio.equipo;
      const edad = socio.edad;

      acc[equipo] = acc[equipo] || {
        total: 0,
        cantidad: 0,
        min: Infinity,
        max: -Infinity,
      };
      acc[equipo].total += edad;
      acc[equipo].cantidad++;
      acc[equipo].min = Math.min(acc[equipo].min, edad);
      acc[equipo].max = Math.max(acc[equipo].max, edad);

      return acc;
    }, {});

    const resultados = Object.entries(promedioPorEquipo)
      .map(([equipo, data]) => ({
        equipo,
        promedio: data.total / data.cantidad,
        min: data.min,
        max: data.max,
        totalSocios: data.cantidad,
      }))
      .sort((a, b) => b.totalSocios - a.totalSocios);
    return resultados;
  }

  getEquipos() {
    const socios = this.db;

    const equipos = [];

    socios.forEach((socio) => {
      if (!equipos.includes(socio.equipo)) {
        equipos.push(socio.equipo);
      }
    });
    return equipos;
  }
}

module.exports = Service;
