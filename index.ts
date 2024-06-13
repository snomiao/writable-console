export class WritableConsole extends WritableStream {
  constructor(write = console.write.bind(console)) {
    super({
      write: (chunk) => {
        write(chunk);
      },
    });
  }
}
