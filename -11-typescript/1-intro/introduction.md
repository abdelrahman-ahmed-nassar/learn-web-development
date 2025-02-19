## intro 

TypeScript is A superset of JavaScript

Solve the problems of the javaScript
  - dynamic typing
  - code maintainability
  - tools limitation

> typescript will finally converted to javaScript

why to use ?
- static typing
- better developer experience (in IDEs and AutoCompletion)
- Better Code Maintainability
- Early Error Detection
- Compatibility

## Set the Environment

- download IDE
- download NodeJs with npm (check => node --version)
- download typescript globally (npm install typescript -g) (check => tsc -v)

## Handling errors

- convert the typescript file to javascript using tsc command
- Edit vscode settings to see errors early (typescript validate)
- download pretty typescript errors extension
- every problem in typescript has a number to help you solve it

## Configuration
- use the tsconfig.config

```{
  "compilerOptions": {
    "moduleDetection": "force",
    "target": "ES6", //out
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
  }
}
```

### Enable file watching
```tsc --watch```