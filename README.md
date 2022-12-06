# React Native Code Generator

<table>
<tr>
<td>
<img src="./assets/icon.png" alt="drawing" width="200" style="border-radius:50%"/>
</td>
<td>

[@muhtalipdede/rn-generator][package]

[![Npm Downloads][npm-downloads]][package] [![Version][version-badge]][package] [![MIT License][license-badge]][license]

</td>
</tr>
</table>

## About
This repository contains code generator for React Native projects in from of a Command Line Tool. Currently it only generates Screen codes. It contains some basic react native components. The supported components are listed below. The number of supported core components will increase in future package versions. In addition, custom components can be developed.
Warning: This package ( [React Native Code Generator @muhtalipdede/rn-generator][package] ) does not have a stable version yet. It is an experiential project.

## Usage

Create a rn-generator.json file in the root of your project
```sh
echo [] > rn-generator.json
````

Add screens (as a Array) properties (as a Object) (useState, useEffect, functions, children - react native base compenents) in the rn-generator.json

For more [Examples](./examples)
```json
[
    {
        "type": "screen",
        "name": "Screen1",
        "state": [
            {
                "name": "state1",
                "type": "string"
            }
        ],
        "effect": [
            {
                "name": "effect1",
                "type": "useEffect",
                "content": "return state1",
                "dependencies": ["state1"]
            }
        ],
        "functions": [
            {
                "name": "function1",
                "type": "function"
                "content": "return true;"
                "params": [
                    {
                        "name": "param1",
                        "type": "string"
                    }
                ]
            }
        ],
        "children": [
            {
                "type": "safe-area-view",
                "children": [
                    {
                        "type": "input",
                        "name": "Input1",
                        "value": "state1",
                        "onChange": "setState1",
                        "style": {
                            "margin": 10,
                            "padding": 10,
                            "borderWidth": 1,
                            "borderColor": "black",
                            "borderRadius": 5,
                            "backgroundColor": "white",
                            "color": "black",
                            "fontSize": 20,
                            "fontWeight": "bold",
                            "textAlign": "center",
                            "width": "100%",
                            "height": 50
                        }
                    }
                ]
            }
        ]
    }
]
```

Run the following command in your terminal prompt:
```sh
npx @muhtalipdede/rn-generator
```

## Maintainers
- Muhtalip Dede ([**@muhtalipdede**](https://github.com/muhtalipdede))

Reach me with email: 

- To: muhtalipdede@gmail.com
- Subject: rn-generator
- Body: {{yourMessage}} with {{yourContact}}

## License

Everything inside this repository is [ISC licensed](./LICENSE).

[npm-downloads]: https://img.shields.io/npm/dw/@muhtalipdede/rn-generator?style=flat-square
[npm-bundle-size]: https://img.shields.io/bundlephobia/min/@muhtalipdede/rn-generator?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@muhtalipdede/rn-generator.svg?style=flat-square
[package]: https://www.npmjs.com/package/@muhtalipdede/rn-generator
[license-badge]: https://img.shields.io/npm/l/@muhtalipdede/rn-generator.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT