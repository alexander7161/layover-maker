fs = require("fs");
var parser = require("xml2json");
const {postData }= require("./post");

fs.readFile("./req.xml", function(err, data) {
  var json = parser.toJson(data);
    console.log("to json ->", json);

  // postData(
  //   `https://18.130.255.52:9002/ndc171webservices/v171/airshopping?site=airline`,
  //   parser.toXml(json)
  // )
  //   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
  //   .catch(error => console.error(error));

});

