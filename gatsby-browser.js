import "./src/styles/global.css";
import Amplify from "aws-amplify";
import "./static/styles/fonts.css";
import "./static/styles/normalize.css";
import awsConfig from "./src/aws-exports";
import CustomLayout from "./wrapPageElement";

Amplify.configure(awsConfig);

export const wrapPageElement =
  process.env.COMING_SOON !== "true" ? CustomLayout : null;
