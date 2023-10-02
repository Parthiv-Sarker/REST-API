const express = require("express");
const router = express.Router();
const {
	handleGetAllTask,
	handleCreateTask,
	handleGetTaskById,
	handleUpdateTask,
	handleDeleteTask,
} = require("../controllers/task");


// For testing..
// router.get("/test",(req,res)=>{
//     res.send("Testing...");
// });

// Get all tasks..
router.get("/",handleGetAllTask);

// Create tasks..
router.post("/",handleCreateTask);

// Get a specific task by ID..
router.get("/:id",handleGetTaskById);

// Find By Id and Update..
router.patch("/:id",handleUpdateTask);

// Find By Id and Delete..
router.delete("/:id",handleDeleteTask);

module.exports = router;
