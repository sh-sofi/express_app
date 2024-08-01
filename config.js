import * as dotenv from 'dotenv';

dotenv.config();

export const PUBLIC_PORT = process.env.PUBLIC_PORT;
export const WEB_TOKEN_SECRET_KEY = process.env.WEB_TOKEN_SECRET_KEY;