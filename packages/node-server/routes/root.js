const path = require("path");

const rootApi = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
};

module.exports = { rootApi };
