import checkStyle from "../screen-generator/check-style";

export default function buttonGenerator(item: any) {
  const { style, text, onPress, color } = item;
  return `<Button style={${checkStyle(style)}} title="${text}" onPress={${onPress}} color={"${color}"} />`;
}
