import checkStyle from "../screen-generator/check-style";
import contentGenerator from "../screen-generator/content-generator";

export default function scrollViewGenerator(item: any) {
  const { style, children } = item;
  return `<ScrollView style={${checkStyle(style)}}>
        ${contentGenerator(children)}
    </ScrollView>`;
}
