const express = require("express");
const { getUser, updateUser, deleteUser } = require("../controllers/userController.js");

const router = express.Router();

// User routes to handle GET, PUT, DELETE request
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;