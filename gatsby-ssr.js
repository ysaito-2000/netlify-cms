import CustomLayout from "./wrapPageElement";
import "./src/components/Layout/Layout.css";
// Amplify.configure(awsConfig);

export const wrapPageElement =
  process.env.COMING_SOON !== "true" ? CustomLayout : null;
