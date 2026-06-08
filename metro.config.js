// Re-export the CommonJS Metro config to avoid Windows ESM path issues.
// This keeps the original `metro.config.cjs` intact and provides a JS entry
// that Metro/Expo can load more reliably on some Windows Node versions.
module.exports = require("./metro.config.cjs");
