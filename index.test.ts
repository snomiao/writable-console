import TextDecoderStream from "polyfill-text-decoder-stream";
import TextEncoderStream from "polyfill-text-encoder-stream";
import { WritableConsole } from ".";

it("should pipe into console", async () => {
  console.write = jest.fn();

  await new Response("hello, world (uint8)\n").body?.pipeTo(
    new WritableConsole()
  );

  await new Response("hello, world (text)\n").body
    ?.pipeThrough(new TextDecoderStream("utf-8")) // UInt8Array stream into string stream
    ?.pipeTo(new WritableConsole());

  await new Response("hello, world (uint8) again\n").body
    ?.pipeThrough(new TextDecoderStream("utf-8")) // UInt8Array stream into string stream
    ?.pipeThrough(new TextEncoderStream()) // UInt8Array stream into string stream
    ?.pipeTo(new WritableConsole());

  expect(console.write).toHaveBeenCalledTimes(6);
});
