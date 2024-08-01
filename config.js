import * as dotenv from 'dotenv';

dotenv.config();

export const PUBLIC_PORT = process.env.PUBLIC_PORT;
export const WEB_TOKEN_SECRET_KEY = process.env.WEB_TOKEN_SECRET_KEY;
export const SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY;