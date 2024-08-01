import sqlite3 from "sqlite3";
import path from 'path';
import { existsSync } from "fs";

const dbPath = path.resolve('test-db.db');
const alreadyExists = existsSync(dbPath);

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database');

    if (!alreadyExists) {
        initDb();
    }
  }
});

export const initDb = () => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, login TEXT UNIQUE NOT NULL, role TEXT NOT NULL, password_hash TEXT NOT NULL);", (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('DB test data was successfuly initialized');
    });
};
