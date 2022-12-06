import checkStyle from "../screen-generator/check-style";
import contentGenerator from "../screen-generator/content-generator";

export default function touchableOpacityGenerator(item: any) {
  const { style, children } = item;
  return `<TouchableOpacity style={${checkStyle(style)}}>
        ${contentGenerator(children)}
    </TouchableOpacity>`;
}
