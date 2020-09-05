const {
  mongo: { workpacesModel }
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
  }
};
