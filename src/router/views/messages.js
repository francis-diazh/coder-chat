import { Router } from "express";

const messages_router = Router();
messages_router.get("/chat", async (req, res, next) => {
  try {
    return res.render("chat", {
        tittle: "Coder chat",
        script: "chat.js"
    });
  } catch (error) {
    next(error);
  }
});

export default messages_router
