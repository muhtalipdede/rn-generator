import createDir from "./create-dir";
import contentGenerator from "./content-generator";
import fs from "fs";
import createImports from "./create-imports";
import stateGenerator from "./state-generator";
import effectGenerator from "./effect-generator";
import functionGenerator from "./function-generator";

export default function screenGenerator(projectDir: string, screen: any) {
  const { name, state, effect, functions, children } = screen;
  const screenDirPath = createDir(projectDir, name);

  const screenComponentPath = screenDirPath + `/${name}Screen.tsx`;
  const screenComponentContent = `
${createImports()}

export const ${name}Screen = () => {
    ${stateGenerator(state)}

    ${effectGenerator(effect)}

    ${functionGenerator(functions)}
    return (
        <>
            ${contentGenerator(children)}
        </>
    );
};

export default ${name}Screen;
`;

  fs.writeFileSync(screenComponentPath, screenComponentContent);
  console.log(`\x1b[32m`, `${name}Screen created`);
}
