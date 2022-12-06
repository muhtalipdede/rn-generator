export default function effectGenerator(effect: any) {
  return effect
    ?.map((item: any) => {
      switch (item.type) {
        case "useEffect":
          return `useEffect(() => {
    ${item.content}
}, [${item.dependencies}]);`;
        default:
          return ``;
      }
    })
    .join("\n");
}
