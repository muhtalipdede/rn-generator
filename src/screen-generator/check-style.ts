export default function checkStyle(style: any) {
  if (style) {
    return `{${Object.keys(style)
      .map((key: any) => {
        if (typeof style[key] === "string") {
          return `${key}: "${style[key]}",`;
        }
        return `${key}: ${style[key]},`;
      })
      .join("\n")}}`;
  }
  return "{}";
}
