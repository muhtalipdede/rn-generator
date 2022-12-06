export default function stateGenerator(state: any) {
  return state
    ?.map((item: any) => {
      switch (item.type) {
        case "boolean":
          return `const [${item.name}, set${
            item.name[0].toUpperCase() + item.name.slice(1)
          }] = useState(false);`;
        case "string":
          return `const [${item.name}, set${
            item.name[0].toUpperCase() + item.name.slice(1)
          }] = useState("");`;
        case "number":
          return `const [${item.name}, set${
            item.name[0].toUpperCase() + item.name.slice(1)
          }] = useState(0);`;
        default:
          return `const [${item.name}, set${
            item.name[0].toUpperCase() + item.name.slice(1)
          }] = useState(null);`;
      }
    })
    .join("\n");
}
