import { IResolvers } from 'graphql-tools';
import query from './query';
import type from './type';
import mutation from './mutation';

const resolversMap: IResolvers = {
  ...query,
  ...type,
  ...mutation,
};

export default resolversMap;
