// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AboutSectionType = {
  "BLURB": "BLURB",
  "CONTENT": "CONTENT",
  "FOUNDER_STATEMENT": "FOUNDER_STATEMENT"
};

const { POST, About } = initSchema(schema);

export {
  POST,
  About,
  AboutSectionType
};