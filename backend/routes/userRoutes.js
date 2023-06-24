import express from "express"
const router = express.Router()

import {
  authUser,
  getUserProfile,
  registerUser,
  logoutUser,
  updateUserProfile,
} from "../controller/userControllers.js"

router.post('/',registerUser);
router.post('/auth',authUser);
router.post('/logout',logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router
