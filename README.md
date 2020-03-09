# Typescript
Type script essentials and some key notes

# Installation
```
npm install -g typescript
```

# Compiling
```
tsc <file.ts>
```

# Examples
[1. Typescript is optional.](examples/1_optional.ts)
 - All javascript code is valid type script code
 - Compile
    ```
    tsc 1_optional.ts
    ```
    You'll get `1_optional.js` in same folder.
- Run
    ```
    node 1_optional.js
    ```
- Output
    ```
    Hello World
    ```
- Compile & Run
    ```
    tsc 1_optional.ts | node 1_optional.js
    
    // Output
    Hello World
    ```
[2. Variables.](examples/2_variables.ts)

