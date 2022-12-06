import checkStyle from "../screen-generator/check-style";
import contentGenerator from "../screen-generator/content-generator";

export default function viewGenerator(item: any) {
  const { style, children } = item;
  return `<View style={${checkStyle(style)}}>
        ${contentGenerator(children)}
    </View>`;
}
