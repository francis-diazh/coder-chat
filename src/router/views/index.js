import { Router } from "express";
import messages_router from "./messages.js";

const views_router = Router()

views_router.use(
    '/coder',messages_router
)

export default views_router