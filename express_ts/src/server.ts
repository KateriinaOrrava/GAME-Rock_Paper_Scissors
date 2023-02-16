/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  multipleStatements: true,
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "123456",
  database: "Blog",
  port: 3306,
});

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

db.connect();

app.get("/scores", (req: Request, res: Response) => {
  const q = "SELECT * FROM GameScores ORDER BY winPerc DESC LIMIT 10";
  db.query(q, (err, data) => {
    if (err) throw err;
    res.send({ data });
  });
});

app.get("/avg", (req: Request, res: Response) => {
  const q =
    "SELECT SUM(timesPaper) AS TotalItemsPaper FROM GameScores;  SELECT AVG(timesPaper) AS AveragetimesPaper FROM GameScores;  SELECT SUM(timesRock) AS TotalItemsRock FROM GameScores;  SELECT AVG(timesRock) AS AveragetimesRock FROM GameScores;SELECT SUM(timesScissors) AS TotalItemsScissors FROM GameScores;  SELECT AVG(timesScissors) AS AveragetimesScissors FROM GameScores; SELECT AVG(winPerc) AS AverageWins FROM GameScores;";
  db.query(q, (err, data) => {
    if (err) throw err;
    res.send({ data });
  });
});

app.post(`/add`, (req: Request, res: Response) => {
  const q = `INSERT INTO GameScores (userName, winPerc, timesPaper, timesRock, timesScissors) VALUES (?);`;
  const values = [
    req.body.userName.userName,
    req.body.winPerc,
    req.body.timesPaper,
    req.body.timesRock,
    req.body.timesScissors,
  ];
  //userName, roundCounter, winPerc, points, timesPaper, timesRock, timesScissors
  db.query(q, [values], (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
