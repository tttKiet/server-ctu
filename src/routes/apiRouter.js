import express from "express";

import { apiController } from "../app/controllers";

const router = express.Router();

router.post("/v1/login", apiController.handleLogin);
router.get("/v1/post", apiController.handleGetPost);

export default router;
