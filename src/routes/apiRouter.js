import express from "express";
import { apiController } from "../app/controllers";
import uploadClound from "../middleWare/cloundiary";

const router = express.Router();

router.get("/v1/work/get-name", apiController.handleGetNameWork);
router.get(
  "/v1/work/get-and-count-resquest",
  apiController.handleGetWorkAndCountResquest
);
router.get("/v1/work/get-all", apiController.handleGetAllWork);
router.get("/v1/work/get-one", apiController.handleGetOneWork);
router.get("/v1/work/browsed", apiController.handleGetWorkBrowsed);
router.get("/v1/work", apiController.handleGetWork);
router.get("/v1/work-user", apiController.handleGetWorkUser);
router.get("/v1/work-user-register", apiController.handleGetWorkUserRegister);
router.get("/v1/post/:id", apiController.handlegetPostById);
router.get("/v1/post", apiController.handleGetPost);
router.get("/v1/get-all-post", apiController.handleGetAllPost);
router.get(
  "/v1/statistical/student-par-req",
  apiController.handleStatisticalParReq
);
router.get("/v1/statistical/post", apiController.handleStatisticalPost);
router.post("/v1/work/register", apiController.handleRegisterWork);
router.post(
  "/v1/post",
  uploadClound.single("image"),
  apiController.handleUpPost
);

router.post("/v1/login", apiController.handleLogin);
router.post("/v1/work/create", apiController.handleCreateWork);

router.patch(
  "/v1/post/:id",
  uploadClound.single("image"),
  apiController.handleUpDatePost
);
router.patch("/v1/work-browse", apiController.handleBrowse);
router.delete("/v1/listUser/delete", apiController.handleDeleteListUser);
router.delete("/v1/post/delete", apiController.handleDeletePost);

export default router;
