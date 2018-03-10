const functions = require("firebase-functions");
const express = require("express");
const firebase = require("firebase-admin");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const cors = require("cors");

const serviceAccount = JSON.parse(
  Buffer.from(functions.config().myservicekeys.firebase64key, "base64")
);
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://the-meatball-stoppe.firebaseio.com"
});

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/helloworld", (req, res) => {
  res.send("Hello from Firebase!");
});

// Need to change from /webhook in the FB dev console to the new link
app.get("/webhook", (req, res) => {
  if (
    req.query["hub.verify_token"] === functions.config().myservicekeys.fbtoken
  ) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("No sir.");
  }
});

// Change made to TMS FB page :: Update Firebase
app.post("/webhook", (req, res) => {
  let options = {
    uri: `https://graph.facebook.com/v2.8/790534394301792/feed?fields=permalink_url,from,message,full_picture&access_token=1828570360690824|${
      functions.config().myservicekeys.fbappsecret
    }`,
    json: true
  };

  rp(options)
    .then(response => {
      const postInfo = response.data.filter(post => {
        return post.from.name === "The Meatball Stoppe" && post.full_picture;
      })[0];

      if (postInfo.message) {
        postInfo.message = postInfo.message.slice(0, 115) + "...";
      } else {
        postInfo.message = "";
      }
      return postInfo;
    })
    .then(postInfo => {
      firebase
        .database()
        .ref("mostRecentFBPost")
        .set({
          imageURL: postInfo.full_picture,
          url: postInfo.permalink_url,
          message: postInfo.message
        });
      res.send(postInfo);
      return;
    })
    .catch(err => {
      res.send(err);
      console.log(err.body);
    });
});

exports.socialWidgetFBApiHandling = functions.https.onRequest(app);
