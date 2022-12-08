import checkStyle from "../screen-generator/check-style";

export default function inputGenerator(item: any) {
  const { style, value, placeholder, placeholderTextColor } = item;

  return `<TextInput 
    style={${checkStyle(style)}} 
    value="${value}" 
    placeholder={"${placeholder}"} 
    placeholderTextColor={"${placeholderTextColor}"} />`;
}
