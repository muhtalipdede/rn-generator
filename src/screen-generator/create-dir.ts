import fs from "fs";

export default function createDir(screenName: string) {
  const screenDir = `./generated/screens`;

  if (!fs.existsSync(screenDir)) {
    fs.mkdirSync(screenDir);
  }

  const screenPath = screenDir + `/${screenName}Screen`;

  if (!fs.existsSync(screenPath)) {
    fs.mkdirSync(screenPath);
  }

  return screenPath;
}
