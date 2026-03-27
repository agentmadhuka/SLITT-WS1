import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Feedback (Simulating Google Spreadsheet)
  app.post("/api/feedback", (req, res) => {
    const feedback = req.body;
    console.log("Received Feedback:", feedback);
    
    // In a real app, you'd use Google Sheets API here.
    // For now, we'll append to a local file to simulate data collection.
    const logPath = path.join(process.cwd(), "feedback_log.json");
    let logs = [];
    if (fs.existsSync(logPath)) {
      logs = JSON.parse(fs.readFileSync(logPath, "utf-8"));
    }
    logs.push(feedback);
    fs.writeFileSync(logPath, JSON.stringify(logs, null, 2));

    res.json({ status: "success", message: "Feedback recorded in protocol nexus." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
