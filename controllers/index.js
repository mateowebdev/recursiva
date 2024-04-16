const Service = require("../service");

const getPlainText = (req, res) => {
  
  const service = new Service();
  const punto1 = service.getTotalSocios();
  const punto2 = service.getPromedioEdadPorEquipo("Racing");
  const punto3 = service.getCasadosConEstudios(100);
  const punto4 = service.getNombresMasComunesPorEquipo(5,"River");
  const punto5 = service.getResumenClubes();

  const body = `<div style="background: rgb(230,230,230); padding: 20px;">
    <p>1. La cantidad total de socios es: <strong>${punto1}</strong>.</p>  
    <hr>
    <p>2. El promedio de edad de los socios de Racing es: <strong>${punto2.toFixed(2)}</strong>.</p>  
    <hr>
    <p>3. Las 100 primeras personas casadas, con estudios Universitarios, ordenadas de menor a mayor según su edad:</p>
    <ul>
    ${punto3.map( persona => `<li>${persona.nombre} (${persona.edad}) - ${persona.equipo}</li>`).join('')}
    </ul>
    <hr>
    <p>4. Los 5 nombres más comunes entre los hinchas de River: <strong>${punto4}</strong>.</p>
    <hr>
    <p>5. Listado, ordenado de mayor a menor según la cantidad de socios:</p>
    <table style="border-collapse: collapse;">
      <thead>
        <tr>
          <th></th>
          <th style="border: 1px solid black; padding: 8px;">Socios</th>
          <th style="border: 1px solid black; padding: 8px;">Equipo</th>
          <th style="border: 1px solid black; padding: 8px;">Promedio de Edad</th>
          <th style="border: 1px solid black; padding: 8px;">Menor edad</th>
          <th style="border: 1px solid black; padding: 8px;">Mayor edad</th>
        </tr>
      </thead>
      <tbody>
        ${punto5.map( (club,index) => `<tr><td style="border: 1px solid black; padding: 8px;">${index+1}</td><td style="border: 1px solid black; padding: 8px;">${club.totalSocios}</td><td style="border: 1px solid black; padding: 8px;">${club.equipo}</td><td style="border: 1px solid black; padding: 8px;">${club.promedio.toFixed(2)}</td><td style="border: 1px solid black; padding: 8px;">${club.min}</td><td style="border: 1px solid black; padding: 8px;">${club.max}</td></tr>`).join('')}
        <!-- Aquí puedes agregar filas con los datos -->
      </tbody>
    </table>
    </div>
  `


  res.status(200).send(body);
};

module.exports = {
  getPlainText
};
