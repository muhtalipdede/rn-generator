import fs from "fs";
import { execSync } from "child_process";
import configGenerator from "./config-generator";

// fs.rmSync("./generated", { recursive: true, force: true });

const generatedDir = `./generated`;

if (!fs.existsSync(generatedDir)) {
    fs.mkdirSync(generatedDir);
}

if (fs.existsSync("./rn-generator.json")) {
    const config = JSON.parse(fs.readFileSync("./rn-generator.json", "utf-8"));
    configGenerator(config);
    console.log("Generated files");

    execSync("npx prettier --write ./generated");
    console.log("Formatted files");
} else {
    console.error(
        "\x1b[31m",
        "\nrn-generator.json not found",
        "\nPlease create a rn-generator.json file in the root of your project"
    );
}
