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
This repository contains code generator for React Native projects in from of a Command Line Tool. Currently it only generates Navigation and Screen codes. It contains some basic react native components. The number of supported core components will increase in future package versions. In addition, custom components can be developed.
Warning: This package ( [React Native Code Generator @muhtalipdede/rn-generator][package] ) does not have a stable version yet. It is an experiential project.

Additional Information: react-native-community typescript project is used as project template. For more information https://github.com/react-native-community/react-native-template-typescript

## Usage

Create a rn-generator.json file in the root of your project
```sh
echo [] > rn-generator.json
````

Add Project Navigations and screens (as a Array) properties (as a Object) (useState, useEffect, functions, children - react native base compenents) in the rn-generator.json

For more [Examples](./examples)
```json
[
  {
    "type": "navigation",
    "name": "App",
    "children": [
      {
        "type": "navigation",
        "name": "Example",
        "children": [
          {
            "type": "screen",
            "name": "Example1",
            "functions": [
              {
                "name": "goTo",
                "params": [
                  {
                    "name": "screenName",
                    "type": "string"
                  }
                ]
              }
            ],
            "children": [
              {
                "type": "safe-area-view" ,
                "style": {
                  "flex": 1,
                  "backgroundColor": "#FFFBEB",
                  "justifyContent": "center",
                  "alignContent": "center"
                },
                "children": [
                  {
                    "type": "view",
                    "style": {
                      "justifyContent": "center",
                      "alignItems": "center",
                      "backgroundColor": "#495579",
                      "borderRadius": 10,
                      "borderWidth": 2,
                      "borderColor": "#263159",
                      "height": 50,
                      "margin": 10
                    },
                    "children": [
                      {
                        "type": "text",
                        "style": {
                          "fontSize": 20,
                          "color": "#FFFBEB"
                        },
                        "text": "Hello World"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "text": "This is a simple example of a React Native app built with the",
                    "style": {
                      "fontSize": 20,
                      "color": "#263159",
                      "textAlign": "center"
                    }
                  },
                  {
                    "type": "text",
                    "text": "@muhtalipdede/rn-generator CLI tool",
                    "style": {
                      "fontSize": 20,
                      "color": "#FF7000",
                      "textAlign": "center"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
```

Run the following command in your terminal prompt:
```sh
npx @muhtalipdede/rn-generator project-name
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