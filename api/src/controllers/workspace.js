const {
  mongo: { workpacesModel, tasksModel }
} = require('../../databases');

module.exports = {
  getOne: async (req, res) => {
    try {
      const { _id } = req.query;
      const worspace = await workpacesModel.findOne({ _id });
      res.json({ info: worspace, msg: 'OK' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  },
  deleteWorkspace: async (req, res) => {
    try {
      const { _id } = req.params;
      await tasksModel.deleteMany({ workspace: _id });
      await workpacesModel.findByIdAndDelete(_id);
      res.json({ msg: 'OK' });
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
};
