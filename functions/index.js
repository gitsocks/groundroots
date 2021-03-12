const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios").default;
const md5 = require("md5");
const moment = require("moment");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
admin.initializeApp();

app.post("/payment", (request, response) => {
    const payment = request.body;
    const db = admin.firestore();
    const boxId = payment["custom_str1"];
    db.collection("payments").add(payment);
    db.collection("boxes").doc(boxId).update({
        status: "Paid",
        token: payment.token
    });
    response.sendStatus(200);
});

app.delete("/payment/:id", async (request, response) => {
    const db = admin.firestore();
    const id = request.params.id;
    const token = (await db.collection("boxes").doc(id).get()).data().token;
    const url = `https://api.payfast.co.za/subscriptions/${token}/cancel?testing=true`;
    const merchantId = "10021945";
    const timestamp = moment().format("YYYY-MM-DDTHH:MM:SS")
    const paramString = `merchant-id=${encodeURIComponent(merchantId)}&passphrase=Groundroots123&timestamp=${encodeURIComponent(timestamp)}&version=v1`;
    const signature = md5(paramString);

    const headers = {
        "Content-Type": "application/json",
        "merchant-id": merchantId,
        "timestamp": timestamp,
        "version": "v1",
        "signature": signature
    }

    axios.put(url, {}, { headers: headers })
        .then(res => response.send(res.data))
        .catch(error => {
            const res = error.response;
            const data = res.data
            response.send(data)
        });
});

exports.app = functions.https.onRequest(app);