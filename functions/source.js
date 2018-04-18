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
  if (
    req.query["hub.verify_token"] === functions.config().myservicekeys.fbtoken
  ) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("No sir.");
  }
});

// Change made to TMS FB page :: Update FBData.json in githubrepo
app.post("/webhook", async (req, res) => {
  const githubToken = functions.config().myservicekeys.githubtoken;
  try {
    const postInfo = await getMostRecentPost();
    const githubFBJson = await getFBDataFromGithub(githubToken);
    const response = await updateGithubFBData(
      githubFBJson,
      postInfo,
      githubToken
    );
    return res.send(response);
  } catch (err) {
    console.log("Something failed!", err);
    return res.send(err);
  }
});

const getMostRecentPost = async () => {
  const fbSecret = functions.config().myservicekeys.fbappsecret;
  const options = {
    uri: `https://graph.facebook.com/v2.8/790534394301792/feed?fields=permalink_url,from,message,full_picture&access_token=1828570360690824|${fbSecret}`,
    json: true
  };
  const response = await rp(options);
  const postInfo = response.data.filter(
    post => post.from.name === "The Meatball Stoppe" && post.full_picture
  )[0];
  postInfo.message = postInfo.message
    ? postInfo.message.slice(0, 115) + "..."
    : "View the latest post on Facebook ⇗";
  return postInfo;
};

const getFBDataFromGithub = async githubToken => {
  const options = {
    uri: `https://api.github.com/repos/grod220/TMS-D.A.Carson/contents/src/components/homepage/socialBar/livePost/FBData.json?access_token=${githubToken}`,
    json: true,
    headers: {
      "User-Agent": "Request-Promise"
    }
  };
  return rp(options);
};

const updateGithubFBData = async (githubFBJson, postInfo, githubToken) => {
  const newJSONcontent = {
    mostRecentFBPost: {
      imageURL: postInfo.full_picture,
      message: postInfo.message,
      url: postInfo.permalink_url
    }
  };
  const newObjJsonStr = JSON.stringify(newJSONcontent, null, 2);
  const newObjJsonB64 = Buffer.from(newObjJsonStr).toString("base64");
  if (newObjJsonB64 === githubFBJson.content.replace(/\n/g, "")) {
    console.log("Post already published on site.")
    return "Post already published on site.";
  }

  const newFileBody = {
    message: `Updated FB post content on ${new Date()}`,
    committer: {
      name: "Mr. Robot",
      email: "mrrobot-fake-email@firebase.com"
    },
    content: newObjJsonB64,
    sha: githubFBJson.sha
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

  console.log("Making PUT request to Github. Updating FBDatafile with ", newJSONcontent)
  return rp(options);
};

exports.socialWidgetFBApiHandling = functions.https.onRequest(app);
