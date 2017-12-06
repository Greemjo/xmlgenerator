import * as express from "express";
import { api } from "./api";
import * as bodyParser from "body-parser"

const app = express();

app.use(express.static("public"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use("/api", api);

app.listen(9000, () => console.log("HTTP server up on port 9000"));
