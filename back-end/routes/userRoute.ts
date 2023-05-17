const express = require('express')
const router = express.Router()

import { createUser, getAllUsers, getUser, getUserByUsernameAndPassword, deleteUser, updateUser } from "../controllers/usercontroller"

router.route("/").get(getAllUsers).post(createUser).get(getUser)
router.route("/login").post(getUserByUsernameAndPassword)
router.route("/:id").get(getUser).delete(deleteUser).patch(updateUser)
export default router