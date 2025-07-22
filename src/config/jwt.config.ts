import { config } from 'dotenv';

config();

export const JWT_CONSTS = {
  SECRET: process.env.JWT_SECRET,
};
