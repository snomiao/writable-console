export class WritableConsole extends WritableStream {
  constructor({ endlf = true, write = console.write.bind(console) } = {}) {
    super({
      write: (chunk) => {
        write(chunk);
      },
      close: () => {
        if (endlf) write("\n");
      },
    });
  }
}
