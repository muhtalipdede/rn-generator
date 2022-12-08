import { execSync } from "child_process";
import fs from "fs";

export default function installPackages(projectDir: string) {
    const packageJsonPath = `${projectDir}/package.json`;
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    packageJson.dependencies = {
        ...packageJson.dependencies,
        "@fortawesome/fontawesome-svg-core": "^6.2.0",
        "@fortawesome/free-solid-svg-icons": "^6.2.0",
        "@fortawesome/react-native-fontawesome": "^0.3.0",
        "@react-native-firebase/app": "^16.1.1",
        "@react-native-firebase/auth": "^16.1.1",
        "@react-native-firebase/firestore": "^16.4.3",
        "@react-native-firebase/messaging": "^16.1.1",
        "@react-native-firebase/remote-config": "^16.1.1",
        "@react-native-firebase/storage": "^16.1.1",
        "@react-navigation/bottom-tabs": "^6.4.0",
        "@react-navigation/native": "^6.0.13",
        "@react-navigation/stack": "^6.3.2",
        "react-native-device-info": "^10.3.0",
        "react-native-gesture-handler": "^2.8.0",
        "react-native-image-picker": "^4.10.0",
        "react-native-linear-gradient": "^2.6.2",
        "react-native-reanimated": "^2.11.0",
        "react-native-safe-area-context": "^4.4.1",
        "react-native-screens": "^3.18.2",
        "react-native-svg": "^13.4.0",
        "react-native-toast-message": "^2.1.5",
        "react-redux": "^8.0.4",
        "redux": "^4.2.0",
        "redux-thunk": "^2.4.1"
    };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    execSync(`cd ${projectDir} && npm install && cd ..`);
}

