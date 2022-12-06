import checkStyle from "../screen-generator/check-style";

export default function imageGenerator(item: any) {
  const { style, source } = item;
  return `<Image style={${checkStyle(style)}} source={${source}} />`;
}
