import express from "express";
import apiRouter from "./routes/api.routes.js";
import { finalErrorHandler, notFoundHandler } from "./middleware/error.middleware.js";

const app = express();

app.use((req, res, next) => {
    console.log("Request method: ", req.method);
    console.log("Request URL: ", req.url);
    
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use(notFoundHandler);
app.use(finalErrorHandler);

app.listen(3000, () => {
    console.log("Listen on http://localhost:3000/"); 
});
