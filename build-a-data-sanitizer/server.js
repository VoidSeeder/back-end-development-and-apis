import express from "express";
import { inputCleaner, inputValidator } from "./middleware.js";

const app = express();


app.get("/", (req, res) => res.redirect("/form"));

app.use("/form", express.static("public"));

app.use("/submit", express.urlencoded({ extended: true }));
app.use("/submit", inputCleaner);
app.use("/submit", inputValidator);
app.post("/submit", (req, res) => {
    res.status(200).send(req.body);
});

app.listen(3000, () => console.log("Server started!"));