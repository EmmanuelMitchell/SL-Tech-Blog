import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Api Ends Point Workng" });
});

export default router;
