import express from "express";
const router = express.Router();
import memberController from "./controllers/member.cotroller";

router.get("/", memberController.goHome);

router.get("/login", memberController.getLogin);

router.get("/singup", memberController.getSignup);

export default router;
