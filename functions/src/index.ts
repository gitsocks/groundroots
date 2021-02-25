import * as functions from "firebase-functions";

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({origin: true}));

app.get("/hello-world", (request: any, response: any) => {
    response.send("Hello from Firebase");
});

exports.api = functions.https.onRequest(app);
