import checkStyle from "../screen-generator/check-style";

export default function buttonGenerator(item: any) {
  const { style, text } = item;
  return `<Button style={${checkStyle(style)}} title="${text}" />`;
}
