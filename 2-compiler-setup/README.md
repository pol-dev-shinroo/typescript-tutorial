## Watch mode

- automatic compilation

```
 tsc app.ts -w
```

## tsconfig

```
tsc --init
```

- The tsc --init command is used to create a tsconfig.json file in the current directory.
- This file specifies the TypeScript compiler options that should be used when compiling the project.

by default if you tsc command:

```
tsc
```

- will compile all ts to js in the directory where tsconfig is present

```
tsc --watch or tsc -w
```

- will run watch mode for all ts in the directory

## exclude

```
  "exclude": ["test.ts", "*.dev.ts", "**/*.dev.ts", "node_modules"]
```

- exclude compilation for test.ts
- exclude compilation for any file that starts with dev.ts pattern
- exclude compilation for any file that starts with dev.ts pattern in any foler
- exclude node modules (this is default)

## include

```
  "include": ["app.ts"]
```

- include only app.ts for compilation

## files

```js
  "files": ["app.ts"]
```

- same as include except here only files are accepted (good for smaller projects)

## compilationOptions

- "how" ts will be compiled

```json
  "compilationOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": [
      "DOM",
      "ES6",
      "DOM.Iterable",
      "ScriptHost"
      ], // => these are set be default
    "sourceMap": "true" // produce .map => you can then view ts even in the source at dev tool. => use this for debugging!!
  },
    "exclude": ["test.ts", "*.dev.ts", "**/*.dev.ts", "node_modules"],
  "include": ["app.ts"],
  "files": ["app.ts"]
```
