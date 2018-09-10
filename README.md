# json-parser

![npm](https://img.shields.io/npm/v/json-parser.svg) ![Build Status](https://travis-ci.com/AndrewRedican/json-parser.svg?branch=master) ![npm](https://img.shields.io/npm/dm/json-parser.svg) [![Known Vulnerabilities](https://snyk.io/test/github/AndrewRedican/json-parser/badge.svg)](https://snyk.io/test/github/{username}/{repo}) [![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)

<p align="center"><img src=https://i.imgur.com/ewtebIW.gif><br /><br />A stylish, editor-like, modular, react component for viewing, editing, and debugging javascript object syntax!</p>

## Installing Dependency

- Using node package manager:

```
   $ npm i --save json-parser
```

## How to Use

```
    import JSONInput from 'json-parser';
    import locale    from 'json-parser/locale/en';

    <JSONInput
        id          = 'a_unique_id'
        placeholder = { sampleObject }
        colors      = { darktheme }
        locale      = { locale }
        height      = '550px'
    />
```

*Hint*: There are two different root paths: `json-parser` and `json-parser/es`. The first contains polyfilled ES5 code, the second unpolyfilled ES6. If you are unsure of which one you need/want, pick the first - it has the best compatibility with tools and browsers.

## Examples

The `./examples` folder contains two examples:

1. webpack-project - A basic example without much overload
2. create-react-app-project - A small example using the create-react-app template

## Testing right away!

1. Fork and/or clone this Github repository
2. Go to an example project under [json-parser/example](https://github.com/AndrewRedican/json-parser/tree/master/example):

```
    $ cd path/to/repo/json-parser/example/webpack-project
```

3. Install example project dependencies:

```
    $ npm i
```

4. Serve sample website to port 8080:

```
   $ npm start
```

5. Open `http://localhost:8080` in the web browser

## Latest Spotlight Release Notes [v2.5.4] - September 6, 2018

1. `Portuguese` locale is now supported. [Read More](https://github.com/AndrewRedican/json-parser/wiki/Locale-Support)
2. [IE11](https://en.wikipedia.org/wiki/Internet_Explorer_11) is now also supported.
2. A good heap of issues were fixed. Find more details in [Change Log](https://github.com/AndrewRedican/json-parser/blob/master/CHANGELOG.md#254---2018-09-06)

## Upcoming Features

1. Collapsible nodes to partially display contents of an object.
2. Even more QA tests.

## Features

1. Write as if you are in a text editor.
2. Checks for syntax mistakes and provides feedback.
3. You can customize color palette as you please.
4. Accepts a javascript object in `placeholder` property to display after component mounts.
5. For any valid textContent, calculates and makes available in this.state as plain text, markup text, and javascript object.
6. Locale support for `English`, `German`, and `Spanish`.

## Component Properties

| Name                          | Description                                                                                                                                                                                                                                                                                     |   Type   | Required  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | :-------: |
| [id]()                        | A unique id to identify component.                                                                                                                                                                                                                                                              |  string  | Mandatory |
| [locale]()                    | The locale of your editor. Import locales like this: `import locale from 'json-parser/locale/en'`. [Learn More](https://github.com/AndrewRedican/json-parser/wiki/Locale-Support)                                                                                         |  object  | Mandatory |
| [placeholder]()               | Send a valid javascript object to be shown once when component is mounted.                                                                                                                                                                                                                      |  object  | Optional  |
| [viewOnly]()                  | Send `true` if you would like for content shown not to be editable.                                                                                                                                                                                                                             | boolean  | Optional  |
| [onChange]()                  | Whenever `onBlur` or `onKeyPress` events take place, it will return content values.                                                                                                                                                                                                             |  object  | Optional  |
| [confirmGood]()               | Send `false` if you would like for the checkmark to confirm good syntax to be hidden.                                                                                                                                                                                                           | boolean  | Optional  |
| [height]()                    | A shorthand property to set a specific height for the entire component.                                                                                                                                                                                                                         |  string  | Optional  |
| [width]()                     | A shorthand property to set a specific width for the entire component.                                                                                                                                                                                                                          |  string  | Optional  |
| [onKeyPressUpdate]()          | Send `false` if you would like for component not to automatically update on key press.                                                                                                                                                                                                          | boolean  | Optional  |
| [waitAfterKeyPress]()         | Amount of milliseconds to wait before re-rendering content after keypress. Value defaults to `1000` when not specified. In other words, component will update if there is no additional keystroke after the last one within 1 second. Less than `100` milliseconds does not makes a difference. |  number  | Optional  |
| [modifyErrorText]()           | A custom function to modify the component's original warning text. This function will receive a single parameter of type `string` and must equally return a `string`.                                                                                                                           | function | Optional  |
| [theme]()                     | Specify which [built-in theme](https://github.com/AndrewRedican/json-parser/wiki/Built-In-Themes) to use.                                                                                                                                                                            |  string  | Optional  |
| [colors]()                    | **Contains the following properties:**                                                                                                                                                                                                                                                          |  object  | Optional  |
| colors.[default]()            | Hex color code for any symbols, like curly `braces`, and `comma`.                                                                                                                                                                                                                               |  string  | Optional  |
| colors.[string]()             | Hex color code for tokens identified as `string` values.                                                                                                                                                                                                                                        |  string  | Optional  |
| colors.[number]()             | Hex color code for tokens identified as `integeter`, `double`, or `float` values.                                                                                                                                                                                                               |  string  | Optional  |
| colors.[colon]()              | Hex color code for tokens identified as `colon`.                                                                                                                                                                                                                                                |  string  | Optional  |
| colors.[keys]()               | Hex color code for tokens identified as `keys` or property names.                                                                                                                                                                                                                               |  string  | Optional  |
| colors.[keys_whiteSpace]()    | Hex color code for tokens identified as `keys` wrapped in quotes.                                                                                                                                                                                                                               |  string  | Optional  |
| colors.[primitive]()          | Hex color code for tokens identified as `boolean` values and null.                                                                                                                                                                                                                              |  string  | Optional  |
| colors.[error]()              | Hex color code for tokens marked with an `error` tag.                                                                                                                                                                                                                                           |  string  | Optional  |
| colors.[background]()         | Hex color code for component's background.                                                                                                                                                                                                                                                      |  string  | Optional  |
| colors.[background_warning]() | Hex color code for warning message displaying at the top in component.                                                                                                                                                                                                                          |  string  | Optional  |
| [style]()                     | **Contains the following properties:**                                                                                                                                                                                                                                                          |  object  | Optional  |
| style.[outerBox]()            | Property to modify the default style of the outside container div of component.                                                                                                                                                                                                                 |  object  | Optional  |
| style.[container]()           | Property to modify the default style of the `container` of component.                                                                                                                                                                                                                           |  object  | Optional  |
| style.[warningBox]()          | Property to modify the default style of the container div of the warning message.                                                                                                                                                                                                               |  object  | Optional  |
| style.[errorMessage]()        | Property to modify the default style of the warning message.                                                                                                                                                                                                                                    |  object  | Optional  |
| style.[body]()                | Property to modify the default style of the container div of row labels and code.                                                                                                                                                                                                               |  object  | Optional  |
| style.[labelColumn]()         | Property to modify the default style of the container div of row labels.                                                                                                                                                                                                                        |  object  | Optional  |
| style.[labels]()              | Property to modify the default style of each row label.                                                                                                                                                                                                                                         |  object  | Optional  |
| style.[contentBox]()          | Property to modify the default style of the container div of the code.                                                                                                                                                                                                                          |  object  | Optional  |

## Component Sections

```
    outerBox
    +-- container
        +--- warningBox
             +---- errorMessage
        +--- body
             +---- labelColumn
                   +----- labels
             +---- contentBox
                   +----- auto generated markup
```

## Content Values

Whenever RJEA re-renders its content, any function passed onto `onChange` property will receive a single object parameter with the following keys and values:

| Key        | Description                                                                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| plainText  | A string representation of then content which includes linebreaks and indentation. Great to console.log()                                                                                             |
| markupText | A string representation of the auto-generated markup used to render content.                                                                                                                          |
| json       | A JSON.stringify version of content.                                                                                                                                                                  |
| jsObject   | A `javascript object` version of content. Will return `undefined` if the content's syntax is incorrect.                                                                                               |
| lines      | Number of lines rendered for content to be displayed.                                                                                                                                                 |
| error      | Returns `false` unless the content's syntax is incorrect, in which case returns an object with a `token` and a `line` number which corresponds to the location at which error occurred and a `reason` |

## Built-In Themes

RJEA supports built-in theme. Here is the [list](https://github.com/AndrewRedican/json-parser/wiki/Built-In-Themes).

## Built With

- [**React.js**](https://reactjs.org/)
- [**Babel.js**](https://babeljs.io/) for transpiling.
- [**Enzyme**](http://airbnb.io/enzyme/) for react-specific testing utilities.
- [**Jest**](https://jestjs.io/docs/en/tutorial-react) for unit testing, also react-specific tests.
- [**Travis CI**](https://travis-ci.org/) for continuous integration.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributors

Thanks goes to these wonderful people :smile::

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/24832471?v=4" width="100px;"/><br /><sub><b>Andrew Redican</b></sub>](https://github.com/AndrewRedican)<br />[📢](#talk-AndrewRedican "Talks") [💻](https://github.com/AndrewRedican/json-parser/commits?author=AndrewRedican "Code") [🌍](#translation-AndrewRedican "Translation") [⚠️](https://github.com/AndrewRedican/json-parser/commits?author=AndrewRedican "Tests") | [<img src="https://avatars3.githubusercontent.com/u/7840502?v=4" width="100px;"/><br /><sub><b>Patrick Sachs</b></sub>](https://patrick-sachs.de/)<br />[💻](https://github.com/AndrewRedican/json-parser/commits?author=PatrickSachs "Code") [🌍](#translation-PatrickSachs "Translation") [⚠️](https://github.com/AndrewRedican/json-parser/commits?author=PatrickSachs "Tests") | [<img src="https://avatars3.githubusercontent.com/u/37770361?v=4" width="100px;"/><br /><sub><b>Allan Kehl</b></sub>](https://allankehl.com)<br />[🌍](#translation-AllanKDeveloper "Translation") | [<img src="https://avatars3.githubusercontent.com/u/426051?v=4" width="100px;"/><br /><sub><b>esbenvb</b></sub>](https://github.com/esbenvb)<br />[📖](https://github.com/AndrewRedican/json-parser/commits?author=esbenvb "Documentation") | [<img src="https://avatars2.githubusercontent.com/u/5831420?v=4" width="100px;"/><br /><sub><b>Markus Petrykowski</b></sub>](http://markus-petrykowski.de)<br />[💡](#example-PetrykowskiM "Examples") | [<img src="https://avatars0.githubusercontent.com/u/5797143?v=4" width="100px;"/><br /><sub><b>Rick Brunstedt</b></sub>](https://github.com/rickbrunstedt)<br />[💻](https://github.com/AndrewRedican/json-parser/commits?author=rickbrunstedt "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
