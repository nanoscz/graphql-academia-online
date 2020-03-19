import * as dotenv from 'dotenv';

dotenv.config();

export const settings = {
  PORT: process.env.PORT || 5000,
};
