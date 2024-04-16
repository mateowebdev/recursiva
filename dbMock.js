const fs = require("fs");
const { parse } = require("csv-parse/sync");

class MockDatabase {
  constructor() {}

  _readCSV(csvData) {
    if (!csvData) {
      return null;
    }

    return parse(csvData, {
      columns: ["nombre", "edad", "equipo", "estado_civil", "nivel_estudios"],
      delimiter: ";",
      skip_empty_lines: true,
      cast: (value, context) => {
        if (context.column === "edad") return Number(value);
        return value;
      },
    });
  }

  getDbData() {
    return this._readCSV(fs.readFileSync("./socios.csv", { encoding: "utf8" }));
  }
}

module.exports = MockDatabase;
