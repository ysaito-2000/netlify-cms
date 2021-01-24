import './src/styles/global.css';
import Amplify from 'aws-amplify';
import './static/styles/fonts.css';
import './static/styles/normalize.css';
import awsConfig from './src/aws-exports';
import CustomLayout from './wrapPageElement';

console.log('ENV', `${process.env.GATSBY_DEV_MODE}`, process.env.GATSBY_API_URL);
Amplify.configure(awsConfig);

// eslint-disable-next-line import/prefer-default-export
export const wrapPageElement = CustomLayout;
