import fs from "fs";
import { execSync } from "child_process";
import configGenerator from "./config-generator";
import { exit } from "process";

const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
    console.error(
        "\x1b[31m",
        "\nProject not found",
        "\nPlease add a projectName to your command",
        "\nExample: npx @muhtalipdede/rn-generator my-project"
    );
    exit();
}

if (fs.existsSync("./rn-generator.json")) {
    const config = JSON.parse(fs.readFileSync("./rn-generator.json", "utf-8"));
    configGenerator(projectName, config);
    execSync("npx prettier --write ./generated");
    // execSync(`cd generated/${projectName} && npm install && npm run android && cd ../..`)
    console.log("\x1b[32m", "Project created");
    console.log("\x1b[32m", `cd generated/${projectName} && npm install && npm run android`);
} else {
    console.error(
        "\x1b[31m",
        "\nrn-generator.json not found",
        "\nPlease create a rn-generator.json file in the root of your project"
    );
}
