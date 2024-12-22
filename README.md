# Using server-sent events

Just a test how the server-sent events work, before starting to use them in a work project.

References:

* [MDN: Using server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
* [SO: How do server-sent events actually work?](https://stackoverflow.com/questions/7636165/how-do-server-sent-events-actually-work)

Install:

```bash
pnpm i
```

Start:

```bash
pnpm run dev
```

Then open `http://localhost:3010` in your browser.

The stream will be printed in the console. And the data will be printed in the browser window.

The stream is available at `http://localhost:3010/my-stream`

Also a named stream is available at <s>`http://localhost:3010/my-stream-event`</s>. The url address still works, but cruently it is implemented in the above stream.
