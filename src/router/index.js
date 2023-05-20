import { Router } from "express";
import views_router from "./views/index.js";

const main_router = Router()

// main_router.use("/api", api router)

main_router.use("/",views_router);

export default main_router;