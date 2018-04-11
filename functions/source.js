const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const rp = require("request-promise");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/helloworld", (req, res) => {
  res.send("Hello from Firebase!");
});

app.get("/webhook", (req, res) => {
  if (req.query["hub.verify_token"] === functions.config().myservicekeys.fbtoken) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("No sir.");
  }
});

app.get("/test", async (req, res) => {
  try {
    const website = await rp('http://www.microsoft.com/')
    return res.send(website);
  }
  catch (err) {
    console.log('fetch failed', err);
    return err;
  }
});

// Change made to TMS FB page :: Update FBData.json in githubrepo
app.post("/webhook", (req, res) => {
  const fbSecret = functions.config().myservicekeys.fbappsecret;
  let options = {
    uri: `https://graph.facebook.com/v2.8/790534394301792/feed?fields=permalink_url,from,message,full_picture&access_token=1828570360690824|${fbSecret}`,
    json: true
  };

  rp(options).then(response => {
    const postInfo = response.data.filter(post => {
      return post.from.name === "The Meatball Stoppe" && post.full_picture;
    })[0];

    if (postInfo.message) {
      postInfo.message = postInfo.message.slice(0, 115) + "...";
    } else {
      postInfo.message = "";
    }
    return postInfo;
  }).then(postInfo => {
    const githubToken = functions.config().myservicekeys.githubtoken;
    const options = {
      uri: `https://api.github.com/repos/grod220/TMS-D.A.Carson/contents/src/components/homepage/socialBar/livePost/FBData.json?access_token=${githubToken}`,
      json: true,
      headers: {
        "User-Agent": "Request-Promise"
      }
    };
    return Promise.all([rp(options), postInfo, githubToken]);
  }).then(([gResponse, postInfo, githubToken]) => {
    const newJSONcontent = {
      mostRecentFBPost: {
        imageURL: postInfo.full_picture,
        message: postInfo.message,
        url: postInfo.permalink_url
      }
    };

    const newObjJsonStr = JSON.stringify(newJSONcontent, null, 2);
    const newObjJsonB64 = Buffer.from(newObjJsonStr).toString("base64");

    if (newObjJsonB64 === gResponse.content.replace(/\n/g, "")) {
      return "Post already published on site.";
    }

    const newFileBody = {
      message: `Updated FB post content on ${new Date()}`,
      committer: {
        name: "Mr. Robot",
        email: "mrrobot-fake-email@firebase.com"
      },
      content: newObjJsonB64,
      sha: gResponse.sha
    };

    const options = {
      method: "PUT",
      uri: `https://api.github.com/repos/grod220/TMS-D.A.Carson/contents/src/components/homepage/socialBar/livePost/FBData.json?access_token=${githubToken}`,
      json: true,
      body: newFileBody,
      headers: {
        "User-Agent": "Request-Promise"
      }
    };

    return rp(options);
  }).then(lastRes => {
    return res.send(lastRes);
  }).catch(err => {
    res.send(err);
    console.log(err.body);
  });
});

exports.socialWidgetFBApiHandling = functions.https.onRequest(app);