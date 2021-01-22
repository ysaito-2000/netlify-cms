import "./src/styles/global.css"
import CustomLayout from "./wrapPageElement"
import "./static/styles/fonts.css"
import "./static/styles/normalize.css"
// eslint-disable-next-line no-unused-vars
import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"
Amplify.configure(awsConfig)

export const wrapPageElement = CustomLayout
