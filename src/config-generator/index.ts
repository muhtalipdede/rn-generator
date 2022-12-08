import fs from "fs";
import { execSync } from "child_process";
import screenGenerator from "../screen-generator";
import installPackages from "./install-packages";
import rewriteAppTsx from "./rewrite-app-tsx";
import navigationGenerator from "../navigation-generator";

export default function configGenerator(projectName: string, config: any) {
  const generatedDir = "./generated";

  if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir);
  }

  const projectDir = `./generated/${projectName}`;

  execSync(`cd generated && npx react-native init ${projectName} --template react-native-template-typescript && cd ..`);

  installPackages(projectDir);
  rewriteAppTsx(projectDir);

  const readChildren = (item: any) => {
    switch (item.type) {
      case "navigation":
        navigationGenerator(projectDir, item);
        break;
      case "screen":
        screenGenerator(projectDir, item);
        break;
      default:
        break;
    }
    if (item.children) {
      return item.children.map((child: any) => readChildren(child));
    }
  } 

  config.map((item: any) => readChildren(item))
}
