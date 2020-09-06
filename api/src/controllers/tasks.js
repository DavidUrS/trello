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
        $push: { tasks: task._id }
      },
      { useFindAndModify: false }
    );
    const updatedWorkpace = await workpacesModel.findById(workspace);
    res.json({ info: updatedWorkpace, msg: 'Task created' });

    try {
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const { workspace, _id } = req.body;
      await workpacesModel.findByIdAndUpdate(
        workspace,
        {
          $pull: { tasks: _id }
        },
        { useFindAndModify: false }
      );
      await tasksModel.findByIdAndDelete(_id);
      const updatedWorkpace = await workpacesModel.findById(workspace);
      res.json({ info: updatedWorkpace, msg: 'Task created' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  changeStatus: async (req, res) => {
    try {
      const { _id } = req.params;
      const { status } = req.body;
      await tasksModel.findByIdAndUpdate(
        _id,
        { status },
        { useFindAndModify: false }
      );
      res.json({ msg: 'OK' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
};
