const connect = require("../config/dbConnect");
const Task = require("../models/task");

connect();

async function handleGetAllTask(req, res) {
	try {
		const tasks = await Task.find();
		// null checking..
		if(tasks.length===0){
			res.send("There is no task to show");
		}
		else{
			res.send(tasks);
		}
		
	} catch (error) {
		res.status(400).json({ message: error });
		console.log(error);
	}
}

async function handleCreateTask(req, res) {
	try {
		const { title, description } = req.body;
		const task = new Task({
			title,
			description,
		});
		const newTask = await task.save();
		res.status(201).send({ message: "Task Added.", newTask });
	} catch (error) {
		res.status(400).json({ message: error });
		console.log(error);
	}
}

async function handleGetTaskById(req, res) {
	try {
		const id = req.params.id;
		const taskById = await Task.findById({ _id: id });
		res.send(taskById);
	} catch (error) {
		res.status(400).json({ message: error });
		console.log(error);
	}
}

async function handleUpdateTask(req, res) {
	try {
		const id = req.params.id;
		const updatedTask = await Task.findByIdAndUpdate(
			{ _id: id },
			req.body,
			{ new: true }
		);
		res.send({ message: "Task Updated.", updatedTask });
	} catch (error) {
		res.status(400).json({ message: error });
		console.log(error);
	}
}

async function handleDeleteTask(req, res) {
	try {
		const id = req.params.id;
		const deletedTask = await Task.findOneAndDelete({ _id: id });
		res.send({ message: "Task Deleted.", deletedTask });
	} catch (error) {
		res.status(400).json({ message: error });
		console.log(error);
	}
}

module.exports = {
	handleGetAllTask,
	handleCreateTask,
	handleGetTaskById,
	handleUpdateTask,
	handleDeleteTask,
};
