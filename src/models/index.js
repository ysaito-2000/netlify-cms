// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Configuration, Layout, Layer } = initSchema(schema);

export {
  Configuration,
  Layout,
  Layer
};