import egnyteAuth from "./utils/auth";
import dotenv from 'dotenv';
import deleteFolder from "./utils/deleteFolder";
dotenv.config();

const FILE_PATH = process.env.FILE_PATH

async function main() {
  const token = await egnyteAuth();
  await deleteFolder(FILE_PATH, token);
  await newFolder(FILE_PATH, token);
}

main();