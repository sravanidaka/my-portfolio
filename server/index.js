import express from "express";
import cors from "cors";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "messages.json");
const PORT = process.env.PORT || 5000;

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch (_) {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

async function readMessages() {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw);
}

async function writeMessages(messages) {
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf8");
}

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/contact", async (req, res) => {
  try {
    const messages = await readMessages();
    res.json(messages);
  } catch (err) {
    console.error("Failed to read messages", err);
    res.status(500).json({ error: "Failed to read messages" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const name = (req.body?.name || "").trim();
    const email = (req.body?.email || "").trim();
    const message = (req.body?.message || "").trim();

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }

    const newEntry = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    const messages = await readMessages();
    messages.push(newEntry);
    await writeMessages(messages);

    res
      .status(201)
      .json({ success: true, message: "Message received", entry: newEntry });
  } catch (err) {
    console.error("Failed to save message", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

app.listen(PORT, () => {
  console.log(`Contact backend running on http://localhost:${PORT}`);
});
