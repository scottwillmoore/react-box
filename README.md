# React Box

## Overview

A generic React element `Box` which transparently passes through the `element` property to `createElement`. As it is written in TypeScript it should validate and auto-complete all the valid attributes of the `element`.

```js
// All 'a' element attributes are validated and auto-completed.
<Box element="a" href="#">
    Hello, world!
</Box>
```

This is a quick example of a potential area of improvement in the TypeScript compiler. In the current state it is quite slow. For this example, my computer takes ~1s for `tsc` to run without `Box` and ~4s to run with `Box`. In addition, auto-completion is noticably sluggish.

## Install

```sh
npm install
npm run develop
```

You can also experiment with it in [CodeSandbox](https://codesandbox.io/s/react-with-typescript-inferred-properties-8h2jo?file=/src/App.tsx). This version is slightly different.
