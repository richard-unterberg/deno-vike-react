# vike react deno example

This is a minimal example of using [vike](https://vike.dev) with [Deno](https://deno.land) and [React](https://reactjs.org).

dev:

```bash
deno task dev
```

build & preview:

```bash
deno task prod
```

build:

```bash
deno task build
```

### the return of the `package.json`

It seems vite.config.ts does not understand `@vitejs/plugin-react` in the deno `imports`. We need to have a `package.json` file in the root of the project. Deno got us [covered here](https://docs.deno.com/runtime/fundamentals/configuration/#package.json-support).