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

all used packages are node packages. while we could use `npm:` imports throughout the project, we keep the `package.json` for easier compatibility with node.js based tools. Deno got us [covered here](https://docs.deno.com/runtime/fundamentals/configuration/#package.json-support).