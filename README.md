# Simple Writable Stream console.write, works both text chunks and UInt8Array

```ts

export const WritableConsole = () => [
  new WritableStream({
    write: (chunk) => {
      console.write(chunk);
    },
  }),
];

```