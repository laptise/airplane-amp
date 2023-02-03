const dotenv = require("dotenv");

dotenv.config();
const load = (key) => {
  const value = process.env[key];
  console.log(`${key}: ${value}`);
  if (value) {
    return value;
  } else {
    console.log(`${key}: SAMPLE (INSTEAD)`);
    return "SAMPLE";
  }
};

/**
 * @type {import('.').PublicRuntimeConfig}
 */
const publicRuntimeConfig = {
  cognito: {
    clientId: load("COGNITO_CLIENT_ID"),
    userPoolId: load("COGNITO_USER_POOL_ID"),
    issuer: load("COGNITO_DOMAIN"),
  },
  nest: load("NEST_API"),
};

module.exports = publicRuntimeConfig;
