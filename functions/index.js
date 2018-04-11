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

app.get('/test', (req, res) => {
  const gResonse = {
    "name": "FBData.json",
    "path": "src/components/homepage/socialBar/livePost/FBData.json",
    "sha": "f7b25216003b97210a760b9c4f16acbec6ba488c",
    "size": 442,
    "url": "https://api.github.com/repos/grod220/TMS-D.A.Carson/contents/src/components/homepage/socialBar/livePost/FBData.json?ref=master",
    "html_url": "https://github.com/grod220/TMS-D.A.Carson/blob/master/src/components/homepage/socialBar/livePost/FBData.json",
    "git_url": "https://api.github.com/repos/grod220/TMS-D.A.Carson/git/blobs/f7b25216003b97210a760b9c4f16acbec6ba488c",
    "download_url": "https://raw.githubusercontent.com/grod220/TMS-D.A.Carson/master/src/components/homepage/socialBar/livePost/FBData.json",
    "type": "file",
    "content": "ewogICAgIm1vc3RSZWNlbnRGQlBvc3QiOiB7CiAgICAgICAgImltYWdlVVJM\nIjogImh0dHBzOi8vc2NvbnRlbnQueHguZmJjZG4ubmV0L3YvdDEuMC05L3E4\nMi9zNzIweDcyMC8zMDEyNzk5OV8xNzQxNTM5MDE1ODY3OTg3XzQ4NDQ5MTEy\nMjk0NTU1NjQ4MF9vLmpwZz9fbmNfY2F0PTAmb2g9NjkzNWI4YTkyODZiMzhh\nZjRjN2U2OGE0YmU1OWM3YzAmb2U9NUI2NTUxMjgiLAogICAgICAgICJtZXNz\nYWdlIjogIk9yZGVyIG91ciBULVNoaXJ0cyBhbmQgSGF0cyBub3cgYW5kICBo\nYXZlIGl0IHNoaXBwZWQgdG8geW91ISAgU2hvdyB0aGUgY29tbXVuaXR5IHdo\nbyBZT1Ugc3VwcG9ydCFcblxuaHR0cHM6Ly93d3cuZm91ci4uLiIsCiAgICAg\nICAgInVybCI6ICJodHRwczovL3d3dy5mYWNlYm9vay5jb20vbWVhdGJhbGxz\ndG9wcGUvcG9zdHMvMTc0MTU0MDExMjUzNDU0NCIKICAgIH0KfQ==\n",
    "encoding": "base64",
    "_links": {
    "self": "https://api.github.com/repos/grod220/TMS-D.A.Carson/contents/src/components/homepage/socialBar/livePost/FBData.json?ref=master",
    "git": "https://api.github.com/repos/grod220/TMS-D.A.Carson/git/blobs/f7b25216003b97210a760b9c4f16acbec6ba488c",
    "html": "https://github.com/grod220/TMS-D.A.Carson/blob/master/src/components/homepage/socialBar/livePost/FBData.json"
    }
  }

  const newJSONcontent = 
  {
      "mostRecentFBPost": {
          "imageURL": "https://scontent.xx.fbcdn.net/v/t1.0-9/q82/s720x720/30127999_1741539015867987_484491122945556480_o.jpg?_nc_cat=0&oh=6935b8a9286b38af4c7e68a4be59c7c0&oe=5B655128",
          "message": "Order our T-Shirts and Hats now and  have it shipped to you!  Show the community who YOU support!\n\nhttps://www.four...",
          "url": "https://www.facebook.com/meatballstoppe/posts/1741540112534544"
      }
  }
  
  console.log(new Buffer(gResonse.content, 'base64').toString('binary'), 'OLD JSON')
  
  const objJsonStr = JSON.stringify(newJSONcontent, null, 4);
  console.log(objJsonStr, 'NEW JSON')
  const objJsonB64 = Buffer.from(objJsonStr).toString("base64");

  console.log(`Does ${objJsonB64} equal ${gResonse.content.replace(/\n/g, '')} ???? \n
               ${objJsonB64 === gResonse.content.replace(/\n/g, '')}`)
  return;
})



// Change made to TMS FB page :: Update FBData.json in githubrepo
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
      const githubToken = functions.config().myservicekeys.githubtoken;
      const options = {
        uri: `https://api.github.com/repos/grod220/TMS-D.A.Carson/contents/src/components/homepage/socialBar/livePost/FBData.json?access_token=${githubToken}`,
        json: true,
        headers : {
          'User-Agent': 'Request-Promise'
        }
      };
      return Promise.all([rp(options), postInfo, githubToken])
    })
    .then(([gResponse, postInfo, githubToken]) => {
      const newJSONcontent = {
        "mostRecentFBPost" : {
          "imageURL" : postInfo.full_picture,
          "message" : postInfo.message,
          "url" : postInfo.permalink_url
        }
      }

      const newObjJsonStr = JSON.stringify(newJSONcontent, null, 2);
      const newObjJsonB64 = Buffer.from(newObjJsonStr).toString("base64");

      if (newObjJsonB64 === gResonse.content.replace(/\n/g, '')) {
        throw new Error('Post already published on site.')
      }

      const newFileBody = {
        "message": `Updated FB post content on ${new Date()}`,
        "committer": {
          "name": "Mr. Robot",
          "email": "mrrobot-fake-email@firebase.com"
        },
        "content": newObjJsonB64,
        "sha": gResponse.sha
      }

      const options = {
        method: 'PUT',
        uri: `https://api.github.com/repos/grod220/TMS-D.A.Carson/contents/src/components/homepage/socialBar/livePost/FBData.json?access_token=${githubToken}`,
        json: true,
        body: newFileBody,
        headers : {
          'User-Agent': 'Request-Promise'
        }
      };

      return rp(options);
    })
    .then((lastRes) => {
      res.send(lastRes)
      return lastRes;
    })
    .catch(err => {
      res.send(err);
      console.log(err.body);
    });
});

exports.socialWidgetFBApiHandling = functions.https.onRequest(app);