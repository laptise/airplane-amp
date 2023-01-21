const express = require("express");
const next = require("next");
const vhost = require("vhost");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const mainServer = express();

  mainServer.use("/", express.static("public"));

  mainServer.get("/", (req, res) => {
    return handle(req, res);
  });

  mainServer.get("*", (req, res) => {
    console.log(req.subdomains);
    const domains = req.hostname.split(".");
    if (domains.length === 2) {
      const [sub] = domains;
      return app.render(req, res, `/${sub}${req.path}`, req.query);
    } else {
      return app.render(req, res, `/main${req.path}`, req.query);
    }
  });

  mainServer.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Ready on http://lvh.me:${port}`);
  });
});
