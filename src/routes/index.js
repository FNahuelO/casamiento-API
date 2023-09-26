import { Router } from "express";
import {
  getInvitados,
  getBebidas,
  postInvitation,
} from "../controllers/invitados.js";

export const router = Router();

router.get("/", (req, res) => {
  res.json("<h1> SERVER UP¨</h1>");
});
router.get("/get-invitados", getInvitados);

router.get("/get-bebidas", getBebidas);

router.put("/confirm-invitation", postInvitation);
