import cors from "cors";
import express from "express";
import path from "path";

const port = 3010;
const app = express();

app.use(cors());
app.use(express.json());
app.set("trust proxy", true);

// Serve the messages stream
app.get("/my-stream", function (req, res) {
  res.status(200).set({
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive",
  });

  let count = 0;

  setInterval(() => {
    res.write(`data: ${new Date().toISOString()}\n\n`);
  }, 1500);

  setInterval(() => {
    count++; // We cant increment inside the res.write() function
    res.write(`event: ping\n`); // Add event field to name the message
    res.write(`data: ${count}\n\n`);
  }, 500);
});

// Serve the the named messages stream
app.get("/my-stream-event", function (req, res) {
  res.status(200).set({
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive",
  });

  let count = 0;

  setInterval(() => {
    count++;
    res.write(`event: ping\n`); // named
    res.write(`data: ${count}\n\n`);
  }, 100);
});

// Serve the frontend
app.get("/*", function (req, res) {
  const uri = req.path;
  const baseDir = path.join(__dirname, ".");
  const docRoot = path.join(baseDir, "frontend");
  const filePath = uri === "/" ? "index.html" : uri.slice(1);
  return res.sendFile(filePath, { root: docRoot });
});

app.listen(port, async () => {
  process.stdout.write(`🚀  Starting upload service on port ${port}...\n`);
});
