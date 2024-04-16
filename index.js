const express = require("express");
const cors = require('cors');


const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

const indexRouter = require("./routes");
const apiRouter = require("./routes/api");

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`Running server at port: ${PORT}`));