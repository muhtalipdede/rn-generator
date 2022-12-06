import screenGenerator from "../screen-generator";

export default function configGenerator(config: any) {
  config?.map((item: any) => {
    switch (item.type) {
      case "screen":
        screenGenerator(item);
        break;
      default:
        break;
    }
  });
}
