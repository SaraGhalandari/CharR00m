const express = require ("express");
const {registerUser,loginUser, findUser, getUsers} = require("../Controllers/userController");

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/find/:userId",findUser);
router.post("/",getUsers);

module.exports = router;