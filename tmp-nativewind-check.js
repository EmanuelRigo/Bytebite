const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const file = path.join("src", "screens", "WelcomeScreen.tsx");
const code = fs.readFileSync(file, "utf8");
console.log("babel core version", require("@babel/core/package.json").version);
console.log("nativewind version", require("nativewind/package.json").version);
console.log(
  "react-native-css-interop version",
  require("react-native-css-interop/package.json").version,
);
console.log(
  "babel-preset-expo version",
  require("babel-preset-expo/package.json").version,
);

try {
  const res = babel.transformSync(code, {
    filename: file,
    configFile: path.resolve("babel.config.js"),
    babelrc: false,
  });
  console.log("transform success length", res.code.length);
  console.log(res.code.slice(0, 400));
} catch (error) {
  console.error("transform error", error && error.message);
  console.error(error);
}

try {
  const expoPreset = require("babel-preset-expo");
  const nativewindPreset = require("nativewind/babel");
  const res2 = babel.transformSync(code, {
    filename: file,
    presets: [expoPreset, nativewindPreset],
    babelrc: false,
  });
  console.log("transform2 success length", res2.code.length);
  console.log(res2.code.slice(0, 400));
} catch (error) {
  console.error("transform2 error", error && error.message);
  console.error(error);
}
