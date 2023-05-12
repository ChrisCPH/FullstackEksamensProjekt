const express = require('express')
const router = express.Router()

import { createUserOwnedGame, getAllUserOwnedGames, getUserOwnedGame, deleteUserOwnedGame, updateUserOwnedGame } from "../controllers/userOwnedGamecontroller"

router.route("/").get(getAllUserOwnedGames).post(createUserOwnedGame).get(getUserOwnedGame)
router.route("/:id").get(getUserOwnedGame).delete(deleteUserOwnedGame).patch(updateUserOwnedGame)
export default router