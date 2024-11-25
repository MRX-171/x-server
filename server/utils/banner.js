const cfonts = require("cfonts");

exports.banner = (text) => {
  cfonts.say(text, {
    font: "block",
    align: "center",
    gradient: ["blue", "red"],
    env: "node",
  });
}
