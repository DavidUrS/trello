const {
  mongo: { workpacesModel, tasksModel }
} = require('../../databases');

module.exports = {
  createTask: async (req, res) => {
    try {
      const { workspace, title, description, _id } = req.body;
      if (!_id) {
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
      } else {
        await tasksModel.findByIdAndUpdate(
          _id,
          { title, description },
          { useFindAndModify: false }
        );
      }
      const updatedWorkpace = await workpacesModel.findById(workspace);
      return res.json({ info: updatedWorkpace, msg: 'Task created' });
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
  },
  searchTask: async (req, res) => {
    try {
      const { workspace, textToSearch } = req.query;
      const workspaceFound = await workpacesModel.findById(workspace);
      let regExp = new RegExp(textToSearch, 'i');
      const tasksFound = await tasksModel.find({
        $or: [
          { title: { $regex: regExp } },
          { description: { $regex: regExp } }
        ],
        workspace
      });
      workspaceFound.tasks = tasksFound;
      res.json({ info: workspaceFound, msg: 'OK' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  archiveTask: async (req, res) => {
    try {
      const { workspace, isArchived, _id } = req.body;
      await tasksModel.findByIdAndUpdate(
        _id,
        {
          isArchived: !isArchived
        },
        { useFindAndModify: false }
      );
      const updatedWorkpace = await workpacesModel.findById(workspace);
      res.json({ info: updatedWorkpace, msg: 'Task created' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
};
