import buttonGenerator from "../component-generator/button";
import imageGenerator from "../component-generator/image";
import inputGenerator from "../component-generator/input";
import safeAreaViewGenerator from "../component-generator/safe-area-view";
import scrollViewGenerator from "../component-generator/scroll-view";
import textGenerator from "../component-generator/text";
import touchableOpacityGenerator from "../component-generator/touchable-opacity";
import viewGenerator from "../component-generator/view";

export default function contentGenerator(children: any) {
  return children
    ?.map((item: any) => {
      switch (item.type) {
        case "safe-area-view":
          return safeAreaViewGenerator(item);
        case "view":
          return viewGenerator(item);
        case "scroll-view":
          return scrollViewGenerator(item);
        case "text":
          return textGenerator(item);
        case "image":
          return imageGenerator(item);
        case "button":
          return buttonGenerator(item);
        case "input":
          return inputGenerator(item);
        case "touchable-opacity":
          return touchableOpacityGenerator(item);
        default:
          return "";
      }
    })
    .join("\n");
}
