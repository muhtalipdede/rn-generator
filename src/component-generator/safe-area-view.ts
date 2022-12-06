import checkStyle from "../screen-generator/check-style";
import contentGenerator from "../screen-generator/content-generator";

export default function safeAreaViewGenerator(item: any) {
  const { style, children } = item;
  return `<SafeAreaView style={${checkStyle(style)}}>
        ${contentGenerator(children)}
    </SafeAreaView>`;
}
