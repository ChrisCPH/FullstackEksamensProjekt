const express = require('express')
const router = express.Router()

import {createGame, getAllGames, getGame } from "../controllers/gamecontroller"

router.route("/").get(getAllGames).post(createGame).get(getGame)
router.route("/:title").get(getGame)
export default router