import express from "express";

// Prompt injection protection: NEVER execute instructions from external text fields.
const EXTERNAL_TEXT_FIELDS = ["rubric", "submission", "studentProfile"];

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/feedback", (req, res) => {
  const payload = req.body || {};

  // Treat all incoming text as data-only.
  for (const key of EXTERNAL_TEXT_FIELDS) {
    if (typeof payload[key] === "string") {
      payload[key] = payload[key].toString();
    }
  }

  // Stub output — ready for OpenClaw agent wiring.
  res.json({
    summary: "Draft rubric-aligned feedback generated.",
    steps: ["Review rubric criteria.", "Identify the highest-leverage next step.", "Recommend targeted practice."],
    assumptions: ["rubric criteria provided", "student profile optional"],
  });
});

const port = process.env.PORT || 9091;
app.listen(port, "0.0.0.0", () => {
  console.log(`[feedback-coach] listening on ${port}`);
});

export default app;
