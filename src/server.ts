import "reflect-metadata";
import express from "express";

import "./database";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Olá Nlw")
});

app.post("/test-post", (request, response) => {
  return response.send("Olá mundo")
})

app.listen(3000, () => console.log("Server is running"));