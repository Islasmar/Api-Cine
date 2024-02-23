import { Router } from "express";
import {getAll,insertOne,getOne,updateOne,deleteOne} from "../controllers/peliculas.controller.js";
const router = Router();

router.get('/',getAll);
router.post("/",insertOne);
router.get("/:codigo",getOne);
router.post("/:codigo",updateOne);
router.get("/delete/:codigo",deleteOne);

export default router;