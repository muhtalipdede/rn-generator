import checkStyle from "../screen-generator/check-style";

export default function textGenerator(item: any) {
  const { style, text } = item;
  return `<Text style={${checkStyle(style)}}>${text}</Text>`;
}
