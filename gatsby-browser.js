import CustomLayout from "./wrapPageElement"
import "./static/styles/fonts.css"
import "./static/styles/normalize.css"
import Amplify from "aws-amplify"
import awsConfig from "./src/aws-exports"
Amplify.configure(awsConfig)

export const wrapPageElement = CustomLayout
