import checkStyle from "../screen-generator/check-style";

export default function inputGenerator(item: any) {
  const { style, text } = item;
  return `<TextInput style={${checkStyle(style)}} value="${text}" />`;
}
