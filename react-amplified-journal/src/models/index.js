// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Journal, Comment } = initSchema(schema);

export {
  User,
  Journal,
  Comment
};