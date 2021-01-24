/**
 * Temporary workaround for Amplify import errors in prod
 */

import "./src/styles/global.css";
// import Amplify from "aws-amplify";
// import awsConfig from "./src/aws-exports";
import "./static/styles/fonts.css";
import "./static/styles/normalize.css";
import CustomLayout from "./wrapPageElement";

// Amplify.configure(awsConfig);

export const wrapPageElement =
  process.env.COMING_SOON !== "true" ? CustomLayout : null;
