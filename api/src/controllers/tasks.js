const {
  mongo: { workpacesModel, tasksModel }
} = require('../../databases');

module.exports = {
  createTask: async (req, res) => {
    const { workspace, title, description } = req.body;
    const workspaceFound = await workpacesModel.findById(workspace);
    const { tasks } = workspaceFound;
    const existentTask = tasks.find(task => task.title === title);

    if (existentTask)
      return res.json({ msg: `You already have a task named ${title}` });

    const newTask = new tasksModel({
      workspace,
      title,
      description,
      createdBy: req.userData._id
    });
    const task = await newTask.save();
    await workpacesModel.findByIdAndUpdate(
      workspace,
      {
        $push: { tasks: task }
      },
      { useFindAndModify: false }
    );
    const updatedWorkpace = await workpacesModel.findById(workspace);
    res.json({ info: updatedWorkpace, msg: 'Task created' });

    try {
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
};
