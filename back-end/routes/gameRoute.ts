const express = require('express')
const router = express.Router()

import {createGame, getAllGames, getGame, deleteGame, updateGame } from "../controllers/gamecontroller"

router.route("/").get(getAllGames).post(createGame).get(getGame)
router.route("/:title").get(getGame)
router.route("/:id").delete(deleteGame).patch(updateGame)
export default router