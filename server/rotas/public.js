const router = require("./private");

router.get("/login", (req, res) => {
  if (res.status(200)) {
    res.sendFile(`${TEMPLATES}/pages/login.html`);
  } else if (500) {
    res.sendFile(`${TEMPLATES}/errors/500.html`);
  }
})

router.get("/cadastro", (req, res) => {
  if (res.status(200)) {
    res.sendFile(`${TEMPLATES}/pages/cadastro.html`);
  } else if (500) {
    res.sendFile(`${TEMPLATES}/errors/500.html`);
  }
})
