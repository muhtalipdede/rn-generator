export default function functionGenerator(func: any) {
  return func
    ?.map((item: any) => {
      if (item.params) {
        let _params = "";
        item.params.map((param: any) => {
          _params += `${param.name}: ${param.type}, `;
        });
        _params = _params.slice(0, -2);
        return `const ${item.name} = (${_params}) => {
                        ${item.content}
                    }`;
      }
      return `const ${item.name} = () => {
    ${item.content}
}`;
    })
    .join("\n");
}
