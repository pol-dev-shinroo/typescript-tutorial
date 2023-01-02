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
