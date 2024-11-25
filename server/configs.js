const path = require('path');

exports.PORT = process.env.PORT || 8080;
exports.TEMPLATES = path.join(__dirname, "..", "views");
