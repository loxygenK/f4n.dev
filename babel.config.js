const presets = [
  ["@babel/preset-env"],
  ["@babel/preset-typescript"],
  [
    "@babel/preset-react",
    {
      develoment: true
    }
  ]
];

module.exports = {presets};
