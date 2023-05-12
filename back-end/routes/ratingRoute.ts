const express = require('express')
const router = express.Router()

import { createRating, getAllRatings, getRating, deleteRating, updateRating } from "../controllers/ratingcontroller"

router.route("/").get(getAllRatings).post(createRating).get(getRating)
router.route("/:id").get(getRating).delete(deleteRating).patch(updateRating)
export default router