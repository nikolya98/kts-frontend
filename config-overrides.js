const { alias, configPaths } = require("react-app-rewire-alias");

module.exports = function override(config) {
  const overrider = alias(configPaths("./tsconfig.paths.json"));
  return overrider(config);
};
